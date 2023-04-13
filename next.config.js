/** @type {import('next').NextConfig} */

const nextConfig = {
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV !== "development",
  },
  images: {
    domains: ["https://scontent.cdninstagram.com", "https://www.instagram.com"],
  },
};

module.exports = nextConfig;
