    var validacaosenha = false;
    var validacaoemail = false;
    var validacaonome = false;

    function cadastrarNome(){
    var nome = document.getElementById('iptnome').value;
    var tamanhoNome = nome.length;
    var mensagemErro = "";

        if (tamanhoNome < 4){
            mensagemErro += `O nome de usuário precisa ter mais de 4 caracteres`
        }else if(tamanhoNome > 45){
            mensagemErro += `O nome de usuário precisa ter no máximo 45 caracteres`
        }else{
            validacaonome = true;
        }

        divmsgerronome.innerHTML = mensagemErro

    }
    
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

    if(!senha){
        mensagemErro = `Insira uma senha para continuar<br>`

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
            }if(senha[i].includes(' ')){
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
    if(especiais && numero && minuscula && maiuscula && !espaco){
        validacaosenha = true;
    }

        divmsgerrosenha.innerHTML = mensagemErro
    }


    
    function cadastrarEmail(){
    var email = document.getElementById('iptemail').value;
    var arroba = email.includes('@');
    var ponto = email.includes('.');
    var espaco = email.includes(' ')
    var tamanhoEmail = email.length;
    var mensagemErro = "";
    var tamanhoValido = false;
        
        if(!email){
            mensagemErro += `Insira um email válido`
        }
        if(!arroba){
            mensagemErro += `O email deve incluir '@'<br>`
        }
        if(!ponto){
            mensagemErro += `O email deve incluir ponto '.'<br>`
        }
        if(espaco){
            mensagemErro += `O email não pode conter espaços<br>`
        }
        if (tamanhoEmail < 5){
            mensagemErro += `O email está muito curto! O email deve ter no mínimo 5 caracteres<br>`
        }else if(tamanhoEmail > 100){
            mensagemErro += `O email está muito longo! O email deve ter no máximo 100 caracteres<br>`
        }else{
            tamanhoValido = true;
        }
        if(arroba && ponto && !espaco && tamanhoValido){
            validacaoemail = true;
        }


            divmsgerroemail.innerHTML = mensagemErro

    }
    
    function cadastrar(){
        var senha =  document.getElementById('iptsenha').value;
        var confirmacaoSenha =  document.getElementById('iptconfirma').value;
        var email = document.getElementById('iptemail').value;
        var nome = document.getElementById('iptnome').value;
        var cadastro = true;
        var mensagemErro = ""
        

            if(!nome){
                mensagemErro += `Insira um nome de usuário<br>`
                cadastro = false;
            }
            if(!email){
                mensagemErro += `Insira um email válido<br>`
                cadastro = false;
            }
            if(!senha){
                mensagemErro += `Insira uma senha<br>`
                cadastro = false;
            }
            if(!confirmacaoSenha){
                mensagemErro += `Confirme a senha<br>`
                cadastro = false;
            }
            if(confirmacaoSenha != senha){
                mensagemErro += `As senhas não coicidem`
                cadastro = false;
            }
            if(validacaonome && validacaoemail && validacaosenha && cadastro){
                alert("CADASTRO REALIZADO COM SUCESSO")
                
                fetch("/usuarios/cadastrar", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        // crie um atributo que recebe o valor recuperado aqui
                      // Agora vá para o arquivo routes/usuario.js
                      nomeServer: nome,
                      emailServer: email,
                      senhaServer: senha
                    }),
                })
                .then(function (resposta) {
                    console.log("resposta: ", resposta);
                    
                    if (resposta.ok) {                          
                          setTimeout(() => {
                              window.location = "./login.html";
                            }, "2000");
                        }
                    })
                    
                    return false;
                }else{
                    divmsgerro.innerHTML = mensagemErro;
                } // FUNCIONOUUUUUUUUUUUUUUUUUUUUUUUUUUUU!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!DEUS É BOM (e o diabo é ruim)
}

    function entrar(){
        var email = document.getElementById('iptemail').value;
        var senha =  document.getElementById('iptsenha').value;
        var mensagemErro = "";

        if(!email || !senha){
            mensagemErro = "Erro! Informe ambos os campos"
        }


            console.log("FORM LOGIN: ", email);
            console.log("FORM SENHA: ", senha);

            fetch("/usuarios/autenticar", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    emailServer: email,
                    senhaServer: senha
                }),
            }).then(function (resposta) {
                console.log("ESTOU NO THEN DO entrar()!", resposta)
    
                if (resposta.ok) {
                    resposta.json().then(json => {
                        console.log(json);
                        sessionStorage.EMAIL_USUARIO = json.email;
                        sessionStorage.NOME_USUARIO = json.nome;
                        sessionStorage.ID_USUARIO = json.idUsuario;
                        window.location.href = "./index.html";
                    });
    
                } else {
                    console.log("Houve um erro ao tentar realizar o login!");
                    divmsgerro.innerHTML = mensagemErro;
                }
    
            }).catch(function (erro) {
                console.log(erro);
            })
    
            return false;
        }

                
