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
    var consultaBD = `
                      SELECT usuario.nome, performance, tempoTotal, FROM resultadosQuiz
                      JOIN usuario
                      ON resultadosQuiz.fkUsuario = usuario.idUsuario
                      ORDER BY performance DESC, tempoTotal ASC;`

                      console.log("Executando a consulta SQL: \n" + consultaBD)

                      return database.executar(consultaBD)
}

function kpis(){

    var consultaBD = `
                      SELECT ROUND(AVG(performance), 2) AS 'Média de acertos',
                      SELECT ROUND(AVG(tempoTotal), 2) AS 'Tempo Médio',
                      (
                      SELECT u.nome
                      FROM resultadosQuiz r
                      JOIN usuario u ON r.fkUsuario = u.idUsuario
                      ORDER BY r.performance DESC, r.tempoTotal ASC
                      LIMIT 1
                      ) as 'Melhor Jogador'
                       FROM resultadosQuiz;`

                       console.log("Executando a consulta SQL: \n" + consultaBD)

                       return database.executar(consultaBD)
}

module.exports = {
    salvarPontuacao
};