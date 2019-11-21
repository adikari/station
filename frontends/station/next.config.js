const withPlugins = require('next-compose-plugins');
const withLess = require('@zeit/next-less')({
  cssModules: true,
  lessLoaderOptions: {
    javascriptEnabled: true
  }
});

const withSourceMaps = require('@zeit/next-source-maps')({
  devtool: 'source-map'
});

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
});

const { getConfig } = require('./src/config/get-config');

// fix: prevents error when .css files are required by node
if (typeof require !== 'undefined') {
  require.extensions['.css'] = () => {};
}

const environment = process.env.STAGE;

if (!environment) {
  throw new Error(
    'Please set the STAGE environment variable. now -e STAGE=production or STAGE=production npm run build'
  );
}

const config = getConfig(environment);

// eslint-disable-next-line no-console
console.log(config);

const env = {
  ACG_ENV: environment,
  ...config
};

module.exports = withPlugins([withSourceMaps, withLess, withBundleAnalyzer], {
  env,
  target: 'serverless'
});
