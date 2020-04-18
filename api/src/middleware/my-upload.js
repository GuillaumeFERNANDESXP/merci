var AWS = require('aws-sdk');

module.exports = function (app) {
  return async (req, res) => {
    // console.log(req)
    const { files } = req; // request
    const fileRes = []; // array 
    // const seq = app.get('mongooseClient');

    for (const file of files) try {
      fileRes.push( // put in this array
        await app.service('drawings').create({
          path: file.path
        })
      );
    } catch (error) {
      console.log('API ERROR:  \n', error);
    }
    res.json(fileRes); // response of this array
  };
};
// Load the SDK and UUID

// // Create unique bucket name
// var bucketName = 'bravoesbucket';
// // Create name for uploaded object key
// var keyName = 'heldqdsdlo_world.txt';

// // Create a promise on S3 service object

// // Handle promise fulfilled/rejected states
// function hello (data) {
//   // Create params for putObject call
//   var objectParams = { Bucket: bucketName, Key: keyName, Body: 'Hello World!' };
//   // Create object upload promise
//   var uploadPromise = new AWS.S3({ apiVersion: '2006-03-01' }).putObject(objectParams).promise();
//   uploadPromise.then(
//     function (data) {
//       console.log("Successfully uploaded data to " + bucketName + "/" + keyName);
//     });
// };
// hello();