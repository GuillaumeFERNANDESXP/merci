module.exports = function (lol) {
    console.log(lol)

    var AWS = require('aws-sdk');

    AWS.config.update({
        accessKeyId: "",
        secretAccessKey: "",
    }); // for simplicity. In prod, use loadConfigFromFile, or env variables

    var bucketName = 'bravoesbucket';
    // Create name for uploaded object key
    var keyName = 'heldqdsddlo_world.txt';

    // Create a promise on S3 service object

    // Handle promise fulfilled/rejected states
    // Create params for putObject call
    var objectParams = { Bucket: bucketName, Key: keyName, Body: 'Hello World!' };
    // Create object upload promise
    var uploadPromise = new AWS.S3({ apiVersion: '2006-03-01' }).putObject(objectParams).promise();
    uploadPromise.then(
        function (data) {
            console.log("Successfully uploaded data to " + bucketName + "/" + keyName);
        }).catch(function (err) {
            console.log(err)
        });
};