var express = require("express");
var router = express.Router();
var query = require("../queries");

router.get("/", function(request, response, next) {
    var breweries;
    // Query for breweries here
    query.getBreweries()
    .then(function(breweries) {
      response.render("breweries", {breweries: breweries});
    })
    .catch(function(err){
      return next(err);
    });
});

router.get("/:id/beers", function(request, response, next) {
    var beers;
    // Query for beers by brewery here
    query.getBeersByBrewery(request.params.id)
    .then(function(beers) {
      response.render("beers", {beers: beers});
    })
    .catch(function(err){
      return next(err);
    });
});

module.exports = router;
