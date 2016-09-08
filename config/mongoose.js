var config = require('./config');
var mongoose = require('mongoose');

module.exports = function() {
  var db = mongoose.connect(config.db);
  require('../models/to_do.model');
  return db;
};
