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
      // إعادة توجيه المسارات API (تأكد من أن API تعمل بشكل صحيح)
      {
        source: "/api/:path*",
        destination: "/api/:path*", 
      },
      // مسارات اللغة الإنجليزية
      {
        source: "/en/:path*",
        destination: "/en/:path*", 
      },
      // مسارات اللغة العربية
      {
        source: "/ar/:path*",
        destination: "/ar/:path*", 
      },
      // إعادة توجيه جميع المسارات غير المعروفة إلى اللغة الافتراضية (الإنجليزية)
      {
        source: "/:path*",
        destination: "/en/:path*", 
      },
    ];
  },


};

export default nextConfig;
