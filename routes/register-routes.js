'use strict'

var path = require('path');
var msRoutes = require('./ms-router');
var errorRoutes = require('./error-router');

module.exports = function (app) {
  // register home route
  app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

  // register main routes
  msRoutes(app);

  // register error routes
  errorRoutes(app);

};
