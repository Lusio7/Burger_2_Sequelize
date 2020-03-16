// Requiring for burger model
var db = require("../models");

// export
module.exports = function(app) {

  // GET route for getting all of the burgers
  app.get("/api/burgers", function(req, res) {
    // Add sequelize code to find all burgers, and return them to the user with res.json
    db.Burger.findAll({}).then(function(dbBurger){
      res.json(dbBurger);
    });
  });

  