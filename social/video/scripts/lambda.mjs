#!/usr/bin/env node
/**
 * Renders the films on Remotion Lambda instead of this machine's CPU.
 *
 *   npm run lambda:deploy                 once, and again after a Remotion upgrade
 *                                         or a change to src/ or public/
 *   npm run lambda:render -- <composition> [--frames=0-199] [--out=out/x.mp4]
 *                                         [--frames-per-lambda=20]
 *
 * Credentials come from REMOTION_AWS_ACCESS_KEY_ID and
 * REMOTION_AWS_SECRET_ACCESS_KEY in the environment — never from a file in
 * the repo. lambda/README.md has the one-time AWS setup.
 *
 * The site Lambda renders from is publicly readable, and some of our 3D
 * models are licensed on terms that forbid passing the file on. So the
 * site is deployed from a copy of public/ without models/, the models go
 * into the same bucket as private objects, and each render hands them to
 * the page as signed URLs that expire after two hours (see modelUrl() in
 * src/world/Model.tsx).
 *
 * Lambda renders the picture only, muted, as before: the soundtrack is
 * rendered and mixed locally in seconds (lambda/README.md, "Звук").
 */

import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { HeadObjectCommand, PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { deployFunction, deploySite, getFunctions, getOrCreateBucket } from "@remotion/lambda";
import { getRenderProgress, presignUrl, renderMediaOnLambda } from "@remotion/lambda/client";

const REGION = "eu-central-1";
/** Hard to guess on purpose: the site is public, though nothing licensed is on it. */
const SITE = "advizen-films-q7k3x9m2";
const FUNCTION = { memorySizeInMb: 3009, timeoutInSeconds: 240, diskSizeInMb: 2048 };
const PRIVATE_PREFIX = "private-assets/";
const SIGNED_FOR = 2 * 60 * 60;

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const MODELS = path.join(ROOT, "public", "models");

const die = (msg) => {
  console.error(msg);
  process.exit(1);
};

const { REMOTION_AWS_ACCESS_KEY_ID: keyId, REMOTION_AWS_SECRET_ACCESS_KEY: secret } = process.env;
if (!keyId || !secret) {
  die("REMOTION_AWS_ACCESS_KEY_ID / REMOTION_AWS_SECRET_ACCESS_KEY are not set. See lambda/README.md.");
}
const s3 = new S3Client({ region: REGION, credentials: { accessKeyId: keyId, secretAccessKey: secret } });

const modelFiles = () => (fs.existsSync(MODELS) ? fs.readdirSync(MODELS).filter((f) => f.endsWith(".glb")) : []);

/** Uploads models that are missing or changed, as private objects (no public ACL). */
const uploadModels = async (bucketName) => {
  for (const f of modelFiles()) {
    const local = path.join(MODELS, f);
    const key = `${PRIVATE_PREFIX}models/${f}`;
    const size = fs.statSync(local).size;
    const remote = await s3
      .send(new HeadObjectCommand({ Bucket: bucketName, Key: key }))
      .then((h) => h.ContentLength)
      .catch(() => null);
    if (remote === size) continue;
    await s3.send(
      new PutObjectCommand({ Bucket: bucketName, Key: key, Body: fs.readFileSync(local), ContentType: "model/gltf-binary" }),
    );
    console.log(`  model uploaded: ${f}`);
  }
};

/** public/ without models/, for the public site. */
const sitePublicDir = () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "advizen-site-public-"));
  for (const entry of fs.readdirSync(path.join(ROOT, "public"))) {
    if (entry === "models") continue;
    fs.cpSync(path.join(ROOT, "public", entry), path.join(dir, entry), { recursive: true });
  }
  return dir;
};

const deploy = async () => {
  console.log(`Deploying to ${REGION}…`);
  const { functionName, alreadyExisted } = await deployFunction({ region: REGION, createCloudWatchLogGroup: true, ...FUNCTION });
  console.log(`  function: ${functionName}${alreadyExisted ? " (already there)" : ""}`);
  const { bucketName } = await getOrCreateBucket({ region: REGION });
  console.log(`  bucket: ${bucketName}`);
  const publicDir = sitePublicDir();
  const { serveUrl } = await deploySite({
    entryPoint: path.join(ROOT, "src", "index.ts"),
    bucketName,
    region: REGION,
    siteName: SITE,
    options: { publicDir },
  });
  fs.rmSync(publicDir, { recursive: true, force: true });
  console.log(`  site: ${serveUrl}`);
  await uploadModels(bucketName);
  console.log("Done.");
};

const flag = (args, name, fallback) => {
  const hit = args.find((a) => a.startsWith(`--${name}=`));
  return hit ? hit.slice(name.length + 3) : fallback;
};

const render = async (args) => {
  const composition = args.find((a) => !a.startsWith("--"));
  if (!composition) die("Which composition? e.g. npm run lambda:render -- itpark");
  const frames = flag(args, "frames", null);
  const frameRange = frames ? frames.split("-").map(Number) : null;
  const out = path.resolve(ROOT, flag(args, "out", `out/${composition}${frames ? `-${frames}` : ""}.mp4`));
  const framesPerLambda = Number(flag(args, "frames-per-lambda", 20));

  const [fn] = await getFunctions({ region: REGION, compatibleOnly: true });
  if (!fn) die("No Lambda function for this Remotion version. Run: npm run lambda:deploy");
  const { bucketName } = await getOrCreateBucket({ region: REGION });
  const serveUrl = `https://${bucketName}.s3.${REGION}.amazonaws.com/sites/${SITE}/index.html`;

  const assets = {};
  for (const f of modelFiles()) {
    assets[`models/${f}`] = await presignUrl({
      region: REGION,
      bucketName,
      objectKey: `${PRIVATE_PREFIX}models/${f}`,
      expiresInSeconds: SIGNED_FOR,
      checkIfObjectExists: false,
    });
  }

  const started = Date.now();
  const { renderId } = await renderMediaOnLambda({
    region: REGION,
    functionName: fn.functionName,
    serveUrl,
    composition,
    inputProps: { assets },
    codec: "h264",
    crf: 15,
    imageFormat: "jpeg",
    jpegQuality: 92,
    muted: true,
    framesPerLambda,
    ...(frameRange ? { frameRange } : {}),
    chromiumOptions: { gl: "swangle" },
    privacy: "private",
    maxRetries: 2,
    outName: path.basename(out),
  });
  console.log(`Rendering ${composition} on Lambda (${renderId})…`);

  for (;;) {
    await new Promise((r) => setTimeout(r, 2000));
    const p = await getRenderProgress({ renderId, bucketName, functionName: fn.functionName, region: REGION });
    if (p.fatalErrorEncountered) die(`Render failed:\n${p.errors.map((e) => e.message).join("\n")}`);
    process.stdout.write(`\r  ${(p.overallProgress * 100).toFixed(0)}%  lambdas ${p.lambdasInvoked}`);
    if (p.done) {
      const url = await presignUrl({ region: REGION, bucketName, objectKey: p.outKey, expiresInSeconds: 900 });
      const res = await fetch(url);
      if (!res.ok) die(`\nDownload failed: ${res.status}`);
      fs.mkdirSync(path.dirname(out), { recursive: true });
      fs.writeFileSync(out, Buffer.from(await res.arrayBuffer()));
      const secs = ((Date.now() - started) / 1000).toFixed(0);
      console.log(`\nDone in ${secs} s → ${path.relative(ROOT, out)}  (≈ $${p.costs.accruedSoFar.toFixed(3)} Lambda)`);
      return;
    }
  }
};

const [cmd, ...rest] = process.argv.slice(2);
if (cmd === "deploy") await deploy();
else if (cmd === "render") await render(rest);
else die("Usage: lambda.mjs deploy | render <composition> [--frames=a-b] [--out=path] [--frames-per-lambda=n]");
