import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  
  async rewrites() {
    return [
      {
        source: "/en/:path*",
        destination: "/en/:path*", // إعادة توجيه للصفحات باللغة الإنجليزية
      },
      {
        source: "/ar/:path*",
        destination: "/ar/:path*", // إعادة توجيه للصفحات باللغة العربية
      },
      {
        source: "/:path*",
        destination: "/en/:path*", // إعادة توجيه لجميع المسارات غير المعروفة إلى اللغة الافتراضية
      },
    ];
  },
};

export default nextConfig;
