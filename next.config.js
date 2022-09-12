/** @type {import('next').NextConfig} */
const withFonts = require("next-fonts");

module.exports = withFonts({
  enableSvg: true,
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  webpack(config) {
    return config;
  },
});
