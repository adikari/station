const modulePlugin = [require.resolve('babel-plugin-module-resolver'), { root: './src/' }];

module.exports = {
  presets: ['next/babel'],
  plugins: [modulePlugin],
  env: {
    test: {
      presets: ['@babel/preset-env', '@babel/preset-react', 'next/babel'],
      plugins: [modulePlugin]
    }
  }
};
