import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // يسمح بالصور من أي مضيف بعيد
      },
    ],
  },
  basePath: "",



};

export default nextConfig;
