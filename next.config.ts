import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  images: {
    loader: "custom",
    loaderFile: "./src/lib/image-loader.ts",
  },
  // The document store and its terms of sale were retired; their URLs point to the closest pages.
  async redirects() {
    return [
      { source: "/store/:path*", destination: "/expertise/legal", permanent: true },
      { source: "/:locale(ru|uz)/store/:path*", destination: "/:locale/expertise/legal", permanent: true },
      { source: "/terms-of-sale", destination: "/terms", permanent: true },
      { source: "/:locale(ru|uz)/terms-of-sale", destination: "/:locale/terms", permanent: true },
    ];
  },
};

export default withNextIntl(nextConfig);
