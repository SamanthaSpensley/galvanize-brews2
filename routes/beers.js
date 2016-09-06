var express = require("express");
var router = express.Router();
var query = require("../queries");

router.get("/", function(request, response, next) {
    var beers;
    // Query for beers here
    query.getBeers()
    .then(function(beers) {
        response.render("beers", {beers: beers});
    })

});

module.exports = router;
