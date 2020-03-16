// Dependencies
var path = require("path");

// Routes
module.exports = function(app) {

  //just handles the HTML page that the user gets sent to.
  // index route loads view.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

};
// Dependence
var path = require("path");

// Routes
module.exports = function(app) {

  //just handles the HTML page that the user gets sent to.
  // index route loads view.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

};
