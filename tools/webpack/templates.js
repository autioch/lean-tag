const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

/* Adds support for:
 * - html templates,
 * - misc files that are just copied,
 * - the base html file.
 */
module.exports = function templates(webpackConfig, setup) {
  webpackConfig.module.loaders.push({
    test: /\.(ico|jpg)$/i,
    exclude: /node_modules/,
    loader: 'file?name=[name].[ext]'
  });
  webpackConfig.plugins.push(
    new HtmlWebpackPlugin({
      template: path.join(setup.sourcePath, 'index.html'),
      filename: 'index.html',
      allChunks: true,
      injest: 'body',
      themes: ['dark', 'light'],
      minify: setup.isProduction ? {
        collapseWhitespace: true,
        minifyCSS: true,
        removeComments: true
      } : false
    })
  );
};
