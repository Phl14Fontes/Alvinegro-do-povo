function cadastrar() {

    var nomeVar = nome_input.value.toLowerCase();
    var emailVar = email_input.value;
    var senhaVar = senha_input.value;

    fetch("/usuarios/cadastrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nome: nomeVar,
            email: emailVar,
            senha: senhaVar,
        })
    }).then(function (resposta) {

        console.log("resposta: ", resposta);

        if (resposta.ok) {
            window.alert("Cadastro realizado, Bem-vindo ao Bando de Loucos!");
            window.location = "login.html";
        } else {
            throw alert("Houve um erro ao tentar realizar o cadastro!");
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });
}