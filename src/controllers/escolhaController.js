var escolhaModel = require("../models/escolhaModel");

function votar1(req, res) {
    var opcao1 = req.body.opcao1;
    
    escolhaModel.votar1(opcao1)
    .then(
        function (resultado) {
            res.json(resultado);
        }
    ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                "\nHouve um erro ao tentar votar! Erro: ",
                erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
    );
}

function votar2(req, res) {
    var opcao2 = req.body.opcao2;
    
    escolhaModel.votar2(opcao2)
    .then(
        function (resultado) {
            res.json(resultado);
        }
    ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                "\nHouve um erro ao tentar votar! Erro: ",
                erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
    );
}

module.exports = {
    votar1,
    votar2
}
