module.exports = function (app) {
  return async (req, res) => {
    console.log(req)
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