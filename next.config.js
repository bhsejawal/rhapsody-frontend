const { i18n } = require("./next-i18next.config");

/* eslint-disable import/no-extraneous-dependencies */
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({
  poweredByHeader: false,
  trailingSlash: true,
  basePath: "",
  // The starter code load resources from `public` folder with `router.basePath` in React components.
  // So, the source code is "basePath-ready".
  // You can remove `basePath` if you don't need it.
  reactStrictMode: true,
  i18n,
  productionBrowserSourceMaps: true,
  env: {
    NEXT_PUBLIC_PARSE_ID: 'APPLICATION_ID',
    NEXT_PUBLIC_PARSE_JAVASCRIPT_KEY: 'MASTER_KEY',
    NEXT_PUBLIC_PARSE_SERVER_URL: 'http://localhost:1337/parse',
  },
});
