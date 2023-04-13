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
        pathname: "scontent.cdninstagram.com",
        port: "https",
        pathname: "instagram.com",
      },
    ],
  },
};

module.exports = nextConfig;
