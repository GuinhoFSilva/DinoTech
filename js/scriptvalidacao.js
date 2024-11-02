    
    function cadastrarSenha(){
    var senha =  document.getElementById('iptsenha').value;
    var tamanhoSenha = senha.length;
    var mensagemErro = ""
    var caracteres = '!@#$%&*_?'
    var especiais = false;
    var numero = false;
    var minuscula = false;
    var maiuscula = false;
    var espaco = false;

    if(senha == ""){
        mensagemErro = `Preencha o campo para continuar<br>`

    }

    if(tamanhoSenha < 6){
        mensagemErro += `Senha muito curta! A senha deve ter pelo menos 6 caracteres<br>`
    }else if(tamanhoSenha > 30){
        mensagemErro += `Senha muito longa! A senha deve ter no máximo 30 caracteres<br>`
    }

    for (i = 0; i < tamanhoSenha; i++){
        for (j = 0; j < caracteres.length; j++){

            if(senha[i].includes(caracteres[j])){
                especiais = true;
            }if(!isNaN(senha[i])){
                numero = true;
            }if (senha[i].toUpperCase() != senha[i]){
                minuscula = true;
            }if (senha[i].toLowerCase() != senha[i]){
                maiuscula = true;
            }if(senha[i].includes(" ")){
                espaco = true;
            }
        }
    }

    if(!especiais){
        mensagemErro += `A senha deve incluir ao menos um caracter especial<br>`
    }
    if(!numero){
        mensagemErro += `A senha deve incluir ao menos um número<br>`
    }
    if(!minuscula){
        mensagemErro += `A senha deve incluir ao menos uma letra minúscula<br>`
    }
    if(!maiuscula){
        mensagemErro += `A senha deve incluir ao menos uma letra maiúscula<br>`
    }
    if(espaco){
        mensagemErro += `A senha não pode incluir espaços em branco<br>`
    }

    divmsgerro.innerHTML = mensagemErro

    }


    function cadastrar(){
        var senha =  document.getElementById('iptsenha').value;
        var confirmacaoSenha =  document.getElementById('iptconfirma').value;
        var mensagemErro = ""
        
            if(confirmacaoSenha != senha){
                alert(`As senhas não coicidem`)
            }

        divmsgerro.innerHTML = mensagemErro
    }

