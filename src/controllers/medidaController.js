var medidaModel = require("../models/medidaModel");

function buscarVotosEmTempoReal(req, res){
    var idVoto = req.params.idVoto;

    console.log("")

    medidaModel.buscarVotosEmTempoReal(idVoto).then(function(resultado) {
        if(resultado.length > 0) {
            res.status(200).json(resultado);
        } else{
            console.error('Nenhum dado encontrado ou erro na API');
        }
    })
}




module.exports = {
    buscarVotosEmTempoReal
}