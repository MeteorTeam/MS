'use strict'

// inject dependencies
var express = require('express'),
path = require('path'),
fs = require('fs'),
debug = require('debug')('MS');

// create the Server
var app = express();

// config server settings
app.set('port', process.env.PORT || 5555)

// setup middlewares
app.use(express.static(path.join(__dirname, 'public')));

// setup rooutes
require('./routes/register-routes')(app);

// start the server
var server = app.listen(app.get('port'),function () {
  debug('MS app is up and listening on port ', server.address().port);
});
