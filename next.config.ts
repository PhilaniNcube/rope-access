import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "utfs.io",
        protocol: "https",
      },
      {
        hostname: "znxlsrg7l6.ufs.sh",
        protocol: "https",
      }
    ]
  }
};

export default nextConfig;
