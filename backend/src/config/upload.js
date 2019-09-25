const multer = require('multer');
const path = require('path'); // easy to construct path between os

module.exports = {
  storage: new multer.diskStorage({
    // __dirname is the folder where this file
    destination: path.resolve(__dirname, '..', '..', 'uploads'),
    // set type file
    filename: function(req, file, callback) {
      callback(null, file.originalname)
    }
  })
}