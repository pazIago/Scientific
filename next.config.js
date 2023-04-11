/** @type {import('next').NextConfig} */

const nextConfig = {
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV !== "development",
  },
  images: {
    domains: ["scontent.cdninstagram.com"],
  },
};

module.exports = nextConfig;
