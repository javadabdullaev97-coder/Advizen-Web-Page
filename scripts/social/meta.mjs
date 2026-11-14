// Shared helpers for the Meta Graph API scripts. Tokens live in `.env.social` at the repo root (git-ignored).
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

export const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
export const ENV_FILE = path.join(ROOT, ".env.social");
export const GRAPH = "https://graph.facebook.com/v23.0";

export function readEnv() {
  if (!fs.existsSync(ENV_FILE)) throw new Error(`Missing ${ENV_FILE}. Copy social/env.example to .env.social and fill it in.`);
  const env = {};
  for (const line of fs.readFileSync(ENV_FILE, "utf8").split("\n")) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*?)\s*$/);
    if (m) env[m[1]] = m[2].replace(/^["']|["']$/g, "");
  }
  return env;
}

export function writeEnv(updates) {
  const lines = fs.existsSync(ENV_FILE) ? fs.readFileSync(ENV_FILE, "utf8").split("\n") : [];
  const seen = new Set();
  const out = lines.map((line) => {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=/);
    if (m && m[1] in updates) {
      seen.add(m[1]);
      return `${m[1]}=${updates[m[1]] ?? ""}`;
    }
    return line;
  });
  for (const [k, v] of Object.entries(updates)) if (!seen.has(k)) out.push(`${k}=${v ?? ""}`);
  fs.writeFileSync(ENV_FILE, out.join("\n"), { mode: 0o600 });
}

// Calls the Graph API. Never prints tokens: error messages carry only Meta's error text.
export async function graph(method, endpoint, params = {}, body) {
  const url = new URL(GRAPH + endpoint);
  if (method === "GET") for (const [k, v] of Object.entries(params)) url.searchParams.set(k, v);
  const init = { method };
  if (method !== "GET") {
    if (body) init.body = body;
    else init.body = new URLSearchParams(params);
  }
  const res = await fetch(url, init);
  const json = await res.json().catch(() => ({}));
  if (!res.ok || json.error) {
    const e = json.error || {};
    throw new Error(`Graph API ${method} ${endpoint.replace(/access_token=[^&]+/, "")}: ${e.message || res.status} (code ${e.code ?? "?"}${e.error_subcode ? "/" + e.error_subcode : ""})`);
  }
  return json;
}

export const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
