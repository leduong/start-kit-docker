/* eslint-disable global-require */
/**
 * Main application routes
 */

module.exports = (app) => {
  // Insert routes below

  app.use('/api/order', require('./apis/order'));
  app.use('/api/product', require('./apis/product'));
  app.use('/api/remarketing', require('./apis/remarketing'));
};
