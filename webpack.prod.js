const base = require('./webpack.base.js');
const { merge } = require('webpack-merge');

module.exports = merge(base, {
  mode: 'production',
  entry: {
    app: './src/index.tsx',
  },
});
