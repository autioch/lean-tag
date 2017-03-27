const path = require('path');
const projectPath = path.join(__dirname, '..');
const webpack = require('webpack');

module.exports = {
  entry: {
    main: path.join(projectPath, 'src', 'index.js')
  },
  output: {
    path: path.join(projectPath, 'dist'),
    filename: 'lean-tag.js',
    libraryTarget: 'commonjs2'
  },
  resolve: {
    root: [projectPath]
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        cacheDirectory: true,
        presets: [ ['es2015', {
          loose: true
        }] ]
      }
    }]
  },
  plugins: [new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  })],
  stats: {
    children: false,
    hash: false,
    version: false,
    colors: true
  }
};
