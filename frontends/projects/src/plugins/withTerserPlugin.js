const TerserPlugin = require('terser-webpack-plugin');
const withSourceMaps = require('@zeit/next-source-maps')({
  devtool: 'source-map'
});

const withTerserPlugin = () => (nextConfig = {}) =>
  withSourceMaps({
    ...nextConfig,
    webpack(config, options) {
      if (!options.defaultLoaders) {
        throw new Error(
          'This plugin is not compatible with Next.js versions below 5.0.0 https://err.sh/next-plugins/upgrade'
        );
      }

      const { dev, isServer } = options;

      if (!dev && !isServer) {
        if (config.optimization && config.optimization.minimizer) {
          config.optimization.minimizer = [
            new TerserPlugin({
              cache: true,
              sourceMap: true,
              parallel: true,
              terserOptions: {
                compress: {
                  ecma: 5,
                  warnings: false,
                  comparisons: true,
                  inline: 2
                },
                ecma: 5,
                mangle: true,
                output: {
                  comments: false
                }
              }
            })
          ];
        }
      }

      if (typeof nextConfig.webpack === 'function') {
        return nextConfig.webpack(config, options);
      }
      return config;
    }
  });

module.exports = {
  withTerserPlugin
};
