var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/votos/:idVoto", function (req, res){
    medidaController.buscarVotosEmTempoReal(req, res);
});

module.exports = router;