const modulePlugin = [require.resolve('babel-plugin-module-resolver'), { root: './src/' }];

module.exports = {
  env: {
    development: {
      presets: ['next/babel'],
      plugins: [modulePlugin]
    },
    production: {
      presets: ['next/babel'],
      plugins: [modulePlugin]
    },
    test: {
      presets: ['@babel/preset-env', '@babel/preset-react', 'next/babel'],
      plugins: [modulePlugin]
    }
  }
};
