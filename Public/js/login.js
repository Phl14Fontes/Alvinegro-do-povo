// function limparFormulario() {
//    document.getElementById("form_login").reset();
// }
lista_caracteres_especiais = ["@","%","$","#","&","/","?","!",".","*","=","+",",",":",";","(",")","[","]","|","-","_"];
function entrar() {

    var emailVar = input_email.value;
    var senhaVar = input_senha.value;
 
    //VALIDAÇÕES:
    if (emailVar == "" || senhaVar == "") {
        window.alert("Preencha todos os campos para prosseguir!");
        return false;
    }
    if (emailVar.indexOf("@") == -1 || emailVar.indexOf(".com") == -1 || emailVar.startsWith("@")
        || emailVar.endsWith("@") || emailVar.length < 8) {
        window.alert("Ops, e-mail inválido! Verifique e tente novamente.");
        document.getElementById("input_email").focus();
        return false;
    }
    if(senhaVar.length <= 5){
        window.alert("Ops, senha muito curta! Tente novamente.");
        document.getElementById("input_senha").focus();
        return false;
    }

    fetch("/usuarios/autenticar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: emailVar,
            senha: senhaVar,
        })
    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO entrar()!")

        if (resposta.ok) {
            console.log(resposta);

            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));

                sessionStorage.EMAIL_USUARIO = json.email;
                sessionStorage.NOME_USUARIO = json.nome;
                sessionStorage.ID_USUARIO = json.id;

                setTimeout(function () {
                    window.location = "comunidade.html";
                }, 1000); // apenas para exibir o loading

            });

        } else {

            console.log("Houve um erro ao tentar realizar o login!");

            resposta.text().then(texto => {
                console.error(texto);
                finalizarAguardar(texto);
            });
        }

    }).catch(function (erro) {
        console.log(erro);
    })

    return false;
}