const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');
const withCSS = require('@zeit/next-css');
const { withNextLess } = require('./src/plugins/withNextLess');
const { withPolyfills } = require('./src/plugins/withPolyfills');
const { withTerserPlugin } = require('./src/plugins/withTerserPlugin');

// FIX: prevents error when .css files are required by node
if (typeof require !== 'undefined') {
  require.extensions['.css'] = () => {};
}

const env = {};

module.exports = withPlugins([[withTerserPlugin], [withPolyfills], [withCSS], [withNextLess], [withImages]], {
  env,
  target: 'serverless'
});
