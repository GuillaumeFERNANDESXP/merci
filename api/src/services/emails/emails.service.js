// Initializes the `emails` service on path `/emails`
const { Emails } = require('./emails.class');
const createModel = require('../../models/emails.model');
const hooks = require('./emails.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/emails', new Emails(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('emails');

  service.hooks(hooks);
};
