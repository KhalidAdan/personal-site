/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/photo-*",
      },
    ],
  },
  reactStrictMode: true,
  swcMinify: true,
};

const { withContentlayer } = require("next-contentlayer");
module.exports = withContentlayer(nextConfig);
