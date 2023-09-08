/** @type {import('next').NextConfig} */

const nextConfig = {
  swcMinify: true,
  distDir:'build',
  compiler: {
    removeConsole: process.env.NODE_ENV !== "development",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
