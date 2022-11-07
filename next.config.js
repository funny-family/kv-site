'use strict';

const { resolve: resolvePath } = require('path');
const withRoutes = require('nextjs-routes/config')();
// const StylelintPlugin = require('stylelint-webpack-plugin');
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
  webpack: (config) => {
    // config.plugins.push(new StylelintPlugin());
    config.resolve.alias = {
      ...config.resolve.alias,
      '@src': resolvePath(__dirname, './src'),
      '@public': resolvePath(__dirname, './src'),
    };

    return config;
  },
};

module.exports = withRoutes(nextConfig);
