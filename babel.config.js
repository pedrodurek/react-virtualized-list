module.exports = {
  presets: ['@babel/env', '@babel/typescript', '@babel/react'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          res: './src/res',
          contexts: './src/contexts',
          views: './src/views',
          components: './src/components',
        },
      },
    ],
  ],
};
