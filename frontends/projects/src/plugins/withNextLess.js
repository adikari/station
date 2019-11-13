const withLess = require('@zeit/next-less');

const withNextLess = (nextConfig = {}) =>
  withLess({
    ...nextConfig,
    cssModules: true,
    loader: 'less-loader',
    lessLoaderOptions: {
      javascriptEnabled: true
    }
  });

module.exports = {
  withNextLess
};
