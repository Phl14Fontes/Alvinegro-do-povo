var express = require("express");
var router = express.Router();

var escolhaController = require("../controllers/escolhaController");

router.post("/votar", function (req, res) {
    escolhaController.votar1(req, res);
})

router.post("/votar2", function (req, res) {
    escolhaController.votar2(req, res);    
})

module.exports = router;