/* Based on config, setup correct enviroment. */
module.exports = function enviroment(webpackConfig, setup) {
  if (setup.isWatch) {
    require('./server')(webpackConfig, setup);
  }

  if (setup.isProduction) {
    require('./production')(webpackConfig, setup);
  } else {
    require('./development')(webpackConfig, setup);
  }
};
