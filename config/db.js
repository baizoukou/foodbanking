let mongoose = require('mongoose');
let dotenv = require('dotenv');
require('../models/voters');

dotenv.config();

const loadDB = () => {
  mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useFindAndModify: false });
  let db = mongoose.connection;
  db.on('error', function (err) {
      console.log('Unable to Connect to [ ' + db.name + ' ]', err);
  });
  db.once('open', function () {
      console.log('Successfully Connected to [ ' + db.name + ' ] on mlab.com');
  });
}

module.exports = loadDB;

