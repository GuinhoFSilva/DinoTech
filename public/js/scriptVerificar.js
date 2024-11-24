window.onload = function() {
    verificaLogin();
    // sair()
}
function verificaLogin() {
    var loginFeito = sessionStorage.NOME_USUARIO
    if(loginFeito != undefined) {
        document.getElementById('divquiz').style.display = 'block';
        document.getElementById('divleader').style.display = 'block'
        document.getElementById('botaoSair').style.display = 'block'
        document.getElementById('divlogin').style.display = 'none';
        document.getElementById('divcadastro').style.display = 'none';
    }else{
        document.getElementById('divcadastro').style.display = 'block';
        document.getElementById('divlogin').style.display = 'block';
        document.getElementById('divquiz').style.display = 'none';
        document.getElementById('divleader').style.display = 'none';
        document.getElementById('botaoSair').style.display = 'none'

     }
}

function sair(){
    var loginFeito = sessionStorage.NOME_USUARIO
    if(loginFeito != undefined) {
        loginFeito = undefined
        setTimeout (() => {
            window.location.href = "./index.html";
            document.getElementById('divlogin').style.display = 'block';
            document.getElementById('divcadastro').style.display = 'block';
            document.getElementById('divquiz').style.display = 'none';
            document.getElementById('divleader').style.display = 'none';
            document.getElementById('botaoSair').style.display = 'none'
        }, 2000);
            sessionStorage.removeItem('NOME_USUARIO');
            sessionStorage.removeItem('EMAIL_USUARIO');
            sessionStorage.removeItem('ID_USUARIO');
        }
}