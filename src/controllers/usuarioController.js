const { response } = require("express");
var usuarioModel = require("../models/usuarioModel");

var sessoes = [];

function testar(req, res) {
    console.log("ENTRAMOS NA usuarioController");
    res.json("ESTAMOS FUNCIONANDO!");
}

function listar(req, res) {
    usuarioModel.listar()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(404).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function entrar(req, res) {
    var email = req.body.email;
    var senha = req.body.senha;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {
        usuarioModel.entrar(email, senha)
            .then(
                function (resultado) {
                    console.log(`\nResultados encontrados: ${resultado.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

                    if (resultado.length == 1) {
                        console.log(resultado);
                        res.json(resultado[0]);
                    } else if (resultado.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {
    var nome = req.body.nome;
    var email = req.body.email;
    var senha = req.body.senha;
    //var resposta = usuarioModel.listar(email)

    if (nome == undefined) {
        res.status(400).send("Seu nome está em branco!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está em branco!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está em branco!");
    } else {
        //select para checar se o email já existe no BD;
        usuarioModel.listar(email).then((resposta)=>{
            if(resposta.length > 0){
                res.json(resposta);
                alert('Email ja cadastrado')
                console.log("Email já cadastrado!");
            }else
            //se não existir faz o insert;
                usuarioModel.cadastrar(nome, email, senha)
                .then(
                    function (resultado) {
                        res.json(resultado);
                        if (resultado.length == 1) {
                          console.log(resultado);
                        res.json(resultado[0]);
                        } else if (resultado.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                        } else {
                        res.status(403).send("Mais de um usuário com o mesmo login!");
                        }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o cadastro! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
        }).catch((erro)=>{   
            res.status(500).json(erro.sqlMessage);
        }) 
    }
} 

module.exports = {
    entrar,
    cadastrar,
    listar,
    testar
}