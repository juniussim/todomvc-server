// INITIALIZER FOR MY EXPRESS APPLICATION
  var express = require('express');
  var morgan = require('morgan');
  var compress = require('compression');
  var bodyParser = require('body-parser');
	// Parse incoming request bodies in a middleware before your handlers, availabe under the req.body property.
  var methodOverride = require('method-override');
	// Lets you use HTTP verbs such as PUT or DELETE in places where the client doesn't support it.


module.exports = function() {
  var app = express();

  // initialize the required module
  if ( !process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
  } else if (process.env.NODE_ENV === 'production') {
    app.use(compress());
  }

	app.use(function(req,res,next){
		res.header("Access-Control-Allow-Origin", "*");
		res.header("Access-Control-Allow-Methods", "DELETE,PULL,PATCH");
		res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
		next();
	});

  app.use(bodyParser.urlencoded({
    extended: false
  }));
  app.use(bodyParser.json());

	app.use(methodOverride());

  require('./routes')(app);

  return app;
};
