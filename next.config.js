/** @type {import('next').NextConfig} */
// const withPWA = require("next-pwa");

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["source.unsplash.com", "backoffice.ekhon.tv"],
  },
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV !== "development",
  },
};

const withPWA = require("next-pwa")({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: true,
});

// const nextConfig = withPWA({
//   // reactStrictMode: true,
//   images: {
//     domains: ["source.unsplash.com", "backoffice.ekhon.tv"],
//   },
//   pwa: {
//     dest: "public",
//     disable: process.env.NODE_ENV === "development",
//     register: true,
//     skipWaiting: true,
//   },
// });

// module.exports = nextConfig;

module.exports = withPWA(nextConfig);
