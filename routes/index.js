var express = require("express");
var router = express.Router();
// var query = require('../queries')

router.get("/", function(request, response, next) {
    response.render("index");
});

module.exports = router;
