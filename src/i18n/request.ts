import { hasLocale } from "next-intl";
import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

const moduleNames = [
  "common",
  "contact",
  "expertise",
  "home",
  "insights",
  "legal-policies",
  "legal-privacy",
  "legal-terms",
  "services",
] as const;

function deepMerge(
  target: Record<string, unknown>,
  source: Record<string, unknown>
): Record<string, unknown> {
  const result = { ...target };
  for (const key of Object.keys(source)) {
    if (
      source[key] !== null &&
      typeof source[key] === "object" &&
      !Array.isArray(source[key]) &&
      typeof target[key] === "object" &&
      target[key] !== null &&
      !Array.isArray(target[key])
    ) {
      result[key] = deepMerge(
        target[key] as Record<string, unknown>,
        source[key] as Record<string, unknown>
      );
    } else {
      result[key] = source[key];
    }
  }
  return result;
}

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested) ? requested : routing.defaultLocale;

  const modules = await Promise.all(
    moduleNames.map((name) => import(`../../messages/${locale}/${name}.json`))
  );

  const messages = modules.reduce(
    (acc, mod) => deepMerge(acc, mod.default as Record<string, unknown>),
    {} as Record<string, unknown>
  );

  return { locale, messages };
});
