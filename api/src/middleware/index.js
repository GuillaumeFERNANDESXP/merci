const myDrawing = require('./my-upload');
const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');

aws.config.update({
  secretAccessKey: 'SECRET',
  accessKeyId: 'ID',
  region: 'us-east-1'
});

var s3 = new aws.S3();

var upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'bravoesbucket',
    key: function (req, file, cb) {
      console.log(file);
      cb(null, file.originalname); //use Date.now() for unique file keys
    }
  })
});

// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.use('/drawings', upload.array('files'), myDrawing(app));
};