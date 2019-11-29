const modulePlugin = [
  require.resolve('babel-plugin-module-resolver'),
  { root: './src/' }
];

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: '10'
        }
      }
    ]
  ],
  plugins: [modulePlugin]
};
