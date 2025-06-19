import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  compiler: {
    removeConsole: process.env.NODE_ENV !== "development",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.soundcloud.com",
      },
      {
        protocol: "https",
        hostname: "*.sndcdn.com",
      },
      {
        protocol: "https",
        hostname: "*.printify.com",
      },
    ],
  },
};

export default nextConfig;