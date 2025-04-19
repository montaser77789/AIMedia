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

  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "/api/:path*",
      },
      {
        source: "/en/:path*",
        destination: "/en/:path*",
      },
      {
        source: "/ar/:path*",
        destination: "/ar/:path*",
      },
      // لا تضيف إعادة توجيه عشوائية بدون شرط للغة
    ];
  }
  


};

export default nextConfig;
