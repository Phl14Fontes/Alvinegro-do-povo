var database = require("../database/config");

    function buscarVotosEmTempoReal(){
        var instrucaoSql = `
            SELECT count(opcao1) as opcao1, count(opcao2) as opcao2 FROM voto;
        `;
        console.log("Executando a instrução SQL: \n" + instrucaoSql);
        return database.executar(instrucaoSql);
    }



module.exports = {
    buscarVotosEmTempoReal
}