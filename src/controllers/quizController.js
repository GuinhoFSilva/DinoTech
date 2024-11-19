var quizModel = require("../models/quizModel");

function salvarPontuacao(req, res){
    var idUsuario = req.body.idUsuarioServer
    var pontuacao = req.body.pontuacaoServer
    var performance = req.body.performanceServer
    var tempoTotal = req.body.tempoTotalServer

    quizModel.salvarPontuacao(idUsuario, pontuacao, performance, tempoTotal)
        .then(
            function (resultado) {
                res.json(resultado);
            }).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o insert! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
}

function leaderboard(req, res){
    quizModel.leaderboard()
    .then(
        function (resultado) {
            res.json(resultado);
        }).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o insert! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        )

}

function kpis(req, res){
    quizModel.kpis()
    .then(
        function (resultado) {
            res.json(resultado);
        }).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o insert! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        )


}
module.exports = {
    salvarPontuacao,
    leaderboard,
    kpis
};