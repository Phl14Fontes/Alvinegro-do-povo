function validarSessao() {
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO; 
}

function sair() {
    sessionStorage.clear();
    window.location = "login.html";
}