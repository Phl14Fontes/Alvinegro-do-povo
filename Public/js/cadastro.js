function cadastrar() {
    var lista_numero = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    var nomeVar = nome_input.value.trim().toUpperCase();
    var emailVar = email_input.value.trim();
    var senhaVar = senha_input.value;
    var confirmacaoSenhaVar = confirmacao_senha_input.value;

    //VALIDAÇÕES
    if(nomeVar == "" || emailVar == "" || senhaVar == "" || confirmacaoSenhaVar == ""){
        window.alert("Preencha todos os campos para prosseguir!");
        document.getElementById("nome_input").focus();
        return false;
    }
    if(nomeVar.length <= 2){
        window.alert("Nome muito curto!");
        document.getElementById("nome_input").focus();
        return false
    }
    if(nomeVar.length > 10){
        window.alert("Nome muito longo!");
        document.getElementById("nome_input").focus();
        return false
    }
    if (emailVar.indexOf("@") == -1 || emailVar.indexOf(".com") == -1 || emailVar.startsWith("@")
        || emailVar.endsWith("@") || emailVar.length < 8 ||  emailVar.startsWith(".com")) {
        window.alert("Ops, e-mail inválido! Verifique e tente novamente.");
        document.getElementById("email_input").focus();
        return false;
    }
    if(senhaVar.length <= 5){
        window.alert("Ops, senha muito curta! Tente novamente.");
        document.getElementById("senha_input").focus();
        return false;
    }
    if(confirmacaoSenhaVar != senhaVar){
        window.alert("A confirmação, está diferente da senha inserida!");
        document.getElementById("confirmacao_senha_input").focus();
        return false;
    }

    //Passou pelas validações;

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

        console.log( resposta);
        console.log( "resposta");

        if (resposta.ok) {
            window.alert("Cadastro realizado, Bem-vindo ao Bando de Loucos!");
            window.location = "login.html"; 
        } else {
            alert("Houve um erro ao tentar realizar o cadastro!");
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });
}