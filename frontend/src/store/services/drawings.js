import feathersClient, { makeServicePlugin, BaseModel } from '../../feathers-client'

// Extend the base class
class Drawing extends BaseModel {
  // eslint-disable-next-line no-useless-constructor
  constructor(data, options) {
    super(data, options)
  }
  static modelName = 'Drawing'
  static instanceDefaults () {
    return {
      image: '',
      firstName: '',
      age: '',
      country: '',
      codePostal: '',
      message: '',
      tags: ''
    }
  }
}

const servicePath = 'drawings'
const servicePlugin = makeServicePlugin({
  Model: Drawing,
  service: feathersClient.service(servicePath),
  servicePath
})

// Optionally add service-level hooks, here:
feathersClient.service(servicePath).hooks({
  before: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },
  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },
  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
})

export default servicePlugin
