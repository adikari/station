const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');
const withCSS = require('@zeit/next-css');
const withSourceMaps = require('@zeit/next-source-maps')({
  devtool: 'source-map'
});
const { withPolyfills } = require('./src/plugins/withPolyfills');

// FIX: prevents error when .css files are required by node
if (typeof require !== 'undefined') {
  require.extensions['.css'] = () => {};
}

const env = {};

module.exports = withPlugins([[withSourceMaps], [withPolyfills], [withCSS], [withImages]], {
  env,
  target: 'serverless'
});
