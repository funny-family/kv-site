const withRoutes = require('nextjs-routes/config')();
const { createPageExtensionsWithPrefix } = require('./utils/create-page-extensions-with-prefix');

const pageExtensions = createPageExtensionsWithPrefix(
  'page',
  ['tsx', 'ts', 'jsx', 'js'],
);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions,
  images: {
    loader: 'akamai',
    path: '',
  },

  /* для деплоя ко мне на github pages */
  // basePath: '/kv-site',
  // assetPrefix: '/kv-site',

  /* для локальной разработки */
  basePath: '',
  assetPrefix: '',
};

module.exports = withRoutes(nextConfig);
