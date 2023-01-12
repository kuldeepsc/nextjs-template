/** @type {import('next').NextConfig} */
// const fs = require("fs");
const SITE_CONFIG = require("./src/config/site.config.js");
const nextConfig = {
  reactStrictMode: true,
  compress: true,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.node = {
      global: true,
      __filename: false,
      __dirname: true,
    };
    return config;
  },
  env: {
    // ...ENV_CONFIG,
  },
  trailingSlash: true,
  useFileSystemPublicRoutes: true,
  publicRuntimeConfig: {
    ...SITE_CONFIG,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: [
      "images.news18.com",
      "img.youtube.com",
      "lbimg.in.com",
      "static.hindi.news18.com",
    ],
  }
}

module.exports = nextConfig
