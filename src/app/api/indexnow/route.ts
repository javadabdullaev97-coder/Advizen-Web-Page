import { NextResponse } from "next/server";
import { publications } from "@/lib/publications";

const KEY = "262c70f4-b784-479a-ab38-8401cd3962b8";
const HOST = "www.advizenco.com";
const SITE_URL = "https://www.advizenco.com";

export async function POST(req: Request) {
  const secret = process.env.INDEXNOW_SECRET;
  // Without a configured secret the check would accept the literal "Bearer undefined".
  if (!secret || req.headers.get("authorization") !== `Bearer ${secret}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const staticUrls = [
    "",
    "/expertise",
    "/insights",
    "/contact",
  ].map((p) => `${SITE_URL}${p}`);

  const articleUrls = publications
    .filter((p) => p.hasRead)
    .map((p) => `${SITE_URL}/insights/${p.slug}`);

  const urlList = [...staticUrls, ...articleUrls];

  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({ host: HOST, key: KEY, urlList }),
  });

  return NextResponse.json({ submitted: urlList.length, status: res.status });
}
