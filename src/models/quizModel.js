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
                      SELECT usuario.nome, performance, tempoTotal, FROM resultadosQuiz
                      JOIN usuario
                      ON resultadosQuiz.fkUsuario = usuario.idUsuario
                      ORDER BY performance DESC, tempoTotal ASC;`

                      console.log("Executando a consulta SQL: \n" + consultaLeaderBD)

                      return database.executar(consultaLeaderBD)
}

function kpis(){

    var consultaKPISBD = `
                      SELECT ROUND(AVG(performance), 2) AS Média_de_acertos, ROUND(AVG(tempoTotal), 2) AS Tempo_Médio, (SELECT u.nome FROM resultadosQuiz AS r JOIN usuario AS u ON r.fkUsuario = u.idUsuario ORDER BY r.performance DESC, r.tempoTotal ASC LIMIT 1) as Melhor_Jogador FROM resultadosQuiz;`

                       console.log("Executando a consulta SQL: \n" + consultaKPISBD)

                       return database.executar(consultaKPISBD)
}

module.exports = {
    salvarPontuacao,
    kpis,
    leaderboard
};