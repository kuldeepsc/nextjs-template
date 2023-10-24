/** @type {import('next').NextConfig} */
// const fs = require("fs");
const SITE_CONFIG = require('./src/config/site.config');
const redirects = require('./src/site-routes/redirects');
const beforeFiles = require('./rewrites/beforeFiles');
const afterFiles = require('./rewrites/afterFiles');

const nextConfig = {
  reactStrictMode: true,
  compress: true,
  webpack: (config, {
    buildId, dev, isServer, defaultLoaders, webpack,
  }) => {
    config.node = {
      // fs: 'empty',
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
  // poweredByHeader: false,
  swcMinify: true,
  useFileSystemPublicRoutes: true,
  skipMiddlewareUrlNormalize: true,
  publicRuntimeConfig: {
    ...SITE_CONFIG,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    // Warning: Dangerously allow production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return redirects;
  },
  async rewrites() {
    return { beforeFiles, afterFiles };
  },
  images: {
    domains: [
      'images.freeimages.com',
      'img.youtube.com',
    ],
  },
};

module.exports = nextConfig;
