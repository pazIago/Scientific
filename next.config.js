/** @type {import('next').NextConfig} */

const nextConfig = {
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV !== "development",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "scontent-iad3-1.cdninstagram.com",
        protocol: "https",
        hostname: "scontent-iad3-2.cdninstagram.com",
        protocol: "https",
        hostname: "scontent-iad3-3.cdninstagram.com",
        port: "https",
        hostname: "instagram.com",
      },
    ],
  },
};

module.exports = nextConfig;
