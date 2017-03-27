const path = require('path');
const isProduction = process.argv.indexOf('-p') > -1;
const projectPath = path.join(__dirname, '..');

module.exports = require('./webpack')({

  /* Is development/production build */
  isProduction,

  /* Root path of the whole project */
  projectPath,

  /* Is rebuild on change */
  isWatch: process.argv.indexOf('--watch') > -1,

  /* Root path of sources */
  sourcePath: path.join(projectPath, 'docsSrc'),

  /* Name of the folder. It's relative to projectPath. */
  buildFolder: path.join(projectPath, 'docs'),

  /* Suffix appended to every js css file for cache busting for new publishes. */
  nameSuffix: new Date().getTime() + (isProduction ? '.min' : ''),

  /* Folder where all the assets will be placed in dist */
  assets: ''
});
