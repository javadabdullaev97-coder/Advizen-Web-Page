import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const SITE_URL = "https://www.advizenco.com";

const nextConfig: NextConfig = {
  // Unmatched URLs fall outside both root layouts ((en) and [locale]), so they need their own 404 page.
  experimental: { globalNotFound: true },
  images: {
    loader: "custom",
    loaderFile: "./src/lib/image-loader.ts",
  },
  // Browsers that have seen the site once over https stay on https.
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [{ key: "Strict-Transport-Security", value: "max-age=31536000" }],
      },
    ];
  },
  async redirects() {
    return [
      // One canonical origin: the bare domain and plain http go to https://www. Host values are
      // anchored because OpenNext tests them unanchored ("advizenco.com" would also match www).
      // The root has its own rule: OpenNext leaves an empty :path* in the destination as is.
      ...["/", "/:path+"].flatMap((source) => [
        {
          source,
          has: [{ type: "host" as const, value: "^advizenco\\.com$" }],
          destination: `${SITE_URL}${source}`,
          statusCode: 301 as const,
        },
        {
          source,
          has: [
            { type: "host" as const, value: "^www\\.advizenco\\.com$" },
            { type: "header" as const, key: "x-forwarded-proto", value: "^http$" },
          ],
          destination: `${SITE_URL}${source}`,
          statusCode: 301 as const,
        },
      ]),
      // English has no prefix, so /en would otherwise serve a second copy of the English pages.
      { source: "/en", destination: "/", statusCode: 301 },
      { source: "/en/:path*", destination: "/:path*", statusCode: 301 },
      // The document store and its terms of sale were retired; their URLs point to the closest pages.
      { source: "/store/:path*", destination: "/expertise/legal", permanent: true },
      { source: "/:locale(ru|uz)/store/:path*", destination: "/:locale/expertise/legal", permanent: true },
      { source: "/terms-of-sale", destination: "/terms", permanent: true },
      // Funding and grants is no longer offered as a separate practice.
      { source: "/expertise/funding", destination: "/expertise", permanent: true },
      { source: "/:locale(ru|uz)/expertise/funding", destination: "/:locale/expertise", permanent: true },
      { source: "/:locale(ru|uz)/terms-of-sale", destination: "/:locale/terms", permanent: true },
    ];
  },
};

export default withNextIntl(nextConfig);
