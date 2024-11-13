window.onload = function() {
    verificaLogin();
    sair();

}
function verificaLogin() {
    if(sessionStorage.NOME_USUARIO != 'undefined') {
        document.getElementById('loginCadastro').style.display = 'none';
        document.getElementById('botaoSair').style.display = 'block'
     }else{
        sair()
     }
}

function sair(){
    if(sessionStorage.NOME_USUARIO = undefined) {
        sessionStorage.removeItem('NOME_USUARIO');
        sessionStorage.removeItem('EMAIL_USUARIO');
        sessionStorage.removeItem('ID_USUARIO');
        setTimeout (() => {
            window.location.href = "./index.html";
            document.getElementById('botaoSair').style.display = 'none'
            document.getElementById('loginCadastro').style.display = 'block';
        }, 2000);
     }
}