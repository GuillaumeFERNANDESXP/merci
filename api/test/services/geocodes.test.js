const assert = require('assert');
const app = require('../../src/app');

describe('\'geocodes\' service', () => {
  it('registered the service', () => {
    const service = app.service('geocodes');

    assert.ok(service, 'Registered the service');
  });
});
