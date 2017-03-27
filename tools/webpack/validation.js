const webpackValidator = require('webpack-validator');

/* Validates constructed webpack config using schema extended by previous steps. */
module.exports = function validation(webpackConfig, setup, schemaExtension) {
  webpackValidator(webpackConfig, {
    schemaExtension: webpackValidator.Joi.object(schemaExtension)
  });
};
