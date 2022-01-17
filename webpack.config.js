const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist')
  },
  stats: {
    assets: true,
    modules: true
  }
};
