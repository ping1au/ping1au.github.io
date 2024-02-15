/**
 * @type {import('next').NextConfig}
 */
const createNextIntlPlugin = require('next-intl/plugin');
 
//const withNextIntl = createNextIntlPlugin();
//const withNextIntl = require("next-intl/plugin")("./src/i18n.ts");
const withNextIntl = require('next-intl/plugin')();
 
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
 
  // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
  // trailingSlash: true,
 
  // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
  // skipTrailingSlashRedirect: true,
 
  // Optional: Change the output directory `out` -> `dist`
  // distDir: 'dist',
}
 
//module.exports = nextConfig;
module.exports = withNextIntl(nextConfig);