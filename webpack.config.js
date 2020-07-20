const path = require('path');
module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, './main.js'),
  watch: true,
  output: {
    path: path.join(__dirname, 'dist'),
    filename: "bundle.js",
    chunkFilename: '[name].js'
  },
  module: {
    rules: [{
      test: /.js?$/,
      include: [
        path.resolve(__dirname, './')
      ],
      exclude: [
        path.resolve(__dirname, 'node_modules')
      ],
      loader: 'babel-loader'
    }]
  },
  resolve: {
    extensions: ['.json', '.js', '.jsx']
  }
};