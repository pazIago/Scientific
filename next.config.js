/** @type {import('next').NextConfig} */

const nextConfig = {
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV !== "development",
  },
  remotePatterns: [
    {
      protocol: "https",
      hostname: "scontent.cdninstagram.com",
      port: "https",
      pathname: "https://www.instagram.com",
    },
  ],
};

module.exports = nextConfig;
