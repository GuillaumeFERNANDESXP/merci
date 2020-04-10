const assert = require('assert');
const app = require('../../src/app');

describe('\'drawings\' service', () => {
  it('registered the service', () => {
    const service = app.service('drawings');

    assert.ok(service, 'Registered the service');
  });
});
