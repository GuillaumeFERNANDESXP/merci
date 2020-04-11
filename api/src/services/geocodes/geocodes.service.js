// Initializes the `geocodes` service on path `/geocodes`
const { Geocodes } = require('./geocodes.class');
const createModel = require('../../models/geocodes.model');
const hooks = require('./geocodes.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/geocodes', new Geocodes(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('geocodes');

  service.hooks(hooks);
};
