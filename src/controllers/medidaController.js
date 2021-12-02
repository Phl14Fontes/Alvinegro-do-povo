var medidaModel = require("../models/medidaModel");

function buscarVotosEmTempoReal(req, res){
    var idVoto = req.params.idVoto;
    
    console.log(`Recuperando votos em tempo real`);
    
    medidaModel.buscarVotosEmTempoReal(idVoto).then(function (resultado) {
        if (resultado.length > 0) {
                res.status(200).json(resultado);
        } else {
                res.status(204).send("Nenhum resultado encontrado!")
        }
        }).catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar os ultimos votos.", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
    }

module.exports = {
    buscarVotosEmTempoReal
}