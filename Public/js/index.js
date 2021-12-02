function validarSessao() {
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;

    if(email == null && nome == null){
      alert("Esta sessão expirou!");
      sair();
    }
}
function sair() {
    sessionStorage.clear();
    window.location = "../login.html";
}