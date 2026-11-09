import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  // Unmatched URLs fall outside both root layouts ((en) and [locale]), so they need their own 404 page.
  experimental: { globalNotFound: true },
  images: {
    loader: "custom",
    loaderFile: "./src/lib/image-loader.ts",
  },
  // The document store and its terms of sale were retired; their URLs point to the closest pages.
  async redirects() {
    return [
      // English has no prefix, so /en would otherwise serve a second copy of the English pages.
      { source: "/en", destination: "/", permanent: true },
      { source: "/en/:path*", destination: "/:path*", permanent: true },
      { source: "/store/:path*", destination: "/expertise/legal", permanent: true },
      { source: "/:locale(ru|uz)/store/:path*", destination: "/:locale/expertise/legal", permanent: true },
      { source: "/terms-of-sale", destination: "/terms", permanent: true },
      { source: "/:locale(ru|uz)/terms-of-sale", destination: "/:locale/terms", permanent: true },
    ];
  },
};

export default withNextIntl(nextConfig);
