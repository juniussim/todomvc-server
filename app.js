// MY MAIN APP JS

var express = require('./config/express');
var mongoose = require('./config/mongoose');

// run database before express application object
var db = mongoose();
var app = express();

app.set('port', (process.env.PORT || 7000));

app.listen(app.get('port'), function() {
  console.log('My express server is running at localhost', app.get('port'));
});

//We are only exporting in case we wish to conduct testing, otherwise we do not need to export app
module.exports = app;
