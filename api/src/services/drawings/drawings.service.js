// Initializes the `drawings` service on path `/drawings`
const { Drawings } = require('./drawings.class');
const createModel = require('../../models/drawings.model');
const hooks = require('./drawings.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/drawings', new Drawings(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('drawings');

  service.hooks(hooks);
};
