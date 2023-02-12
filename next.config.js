/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/outdoorsy/**",
      },
    ],
  },
  modularizeImports: {
    lodash: {
      transform: "lodash/{{member}}",
    },
  },
};

module.exports = nextConfig;
