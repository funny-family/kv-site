const { createPageExtensionsWithPrefix } = require('./utils/create-page-extensions-with-prefix');

const pageExtensions = createPageExtensionsWithPrefix(
  'page',
  ['tsx', 'ts', 'jsx', 'js'],
);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  pageExtensions,
  images: {
    loader: 'akamai',
    path: '',
  },

  /* для деплоя ко мне на github pages */
  // basePath: '/kv-site',s
  // assetPrefix: '/kv-site',

  /* для локальной разработки */
  basePath: '',
  assetPrefix: '',
};

module.exports = nextConfig;
