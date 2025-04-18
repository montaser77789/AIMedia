import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
  },
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
