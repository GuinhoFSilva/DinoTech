var database = require("../database/config")

function salvarPontuacao(idUsuario, pontuacao, performance, tempoTotal) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ")  
    var instrucaoSql = `
        INSERT INTO resultadosQuiz (fkUsuario, pontuacao, performance, tempoTotal) VALUES ('${idUsuario}', '${pontuacao}', '${performance}', '${tempoTotal}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function leaderboard(){
    var consultaLeaderBD = `
                      select usuario.idUsuario, usuario.nome, performance, tempoTotal from resultadosQuiz join usuario on resultadosQuiz.fkusuario = usuario.idusuario order by performance desc, tempoTotal asc;`

                      console.log("Executando a consulta SQL: \n" + consultaLeaderBD)

                      return database.executar(consultaLeaderBD)
}

function kpis(){

    var consultaKPISBD = `
                     select truncate(avg(performance), 2) as Média_de_acertos, truncate(avg(tempoTotal), 2) as Tempo_Médio, (select usuario.nome from resultadosQuiz join usuario on resultadosQuiz.fkusuario = usuario.idusuario order by resultadosQuiz.performance desc, resultadosQuiz.tempoTotal asc limit 1) as Melhor_Jogador from resultadosQuiz`

                       console.log("Executando a consulta SQL: \n" + consultaKPISBD)

                       return database.executar(consultaKPISBD)
}

module.exports = {
    salvarPontuacao,
    kpis,
    leaderboard
};