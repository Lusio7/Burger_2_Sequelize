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

   // Get route for returning burgers of a specific complete
   app.get("/api/burgers/complete/:complete", function(req, res) {
    // Add sequelize code to find all burgers where the complete is equal to req.params.complete,
    // return the result to the user with res.json
    db.Burger.findAll({
      where: {
        complete: req.params.complete
      }

    }).then(function(dbBurger){
      res.json(dbBurger);
    });
  });

   // Get route for retrieving a single burger
   app.get("/api/burgers/:id", function(req, res) {
    // Add sequelize code to find a single burger where the id is equal to req.params.id,
    // return the result to the user with res.json'
    db.Burger.find({
      where: {
        id: req.params.id
      }

    }).then(function(dbBurger){
      res.json(dbBurger);
    });
  });

   // POST route for saving a new burger
   app.post("/api/burgers", function(req, res) {
    // Add sequelize code for creating a burger using req.body,
    // then return the result using res.json
    db.Burger.create({
      text: req.body.text,
      body: req.body.body,
      complete : req.body.complete
    }).then(function(dbBurger){
      res.json(dbBurger);
    });
  });

  