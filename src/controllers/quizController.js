var quizModel = require("../models/quizModel");


function salvarPontuacao(req, res){
    var idUsuario = req.body.idUsuarioServer
    var performance = req.body.performanceServer
    var tempoTotal = req.body.tempoTotalServer

    quizModel.salvarPontuacao(idUsuario, performance, tempoTotal)
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

module.exports = {
    salvarPontuacao
};