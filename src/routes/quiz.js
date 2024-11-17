var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

router.post("/salvarPontuacao", function (req, res) {
    quizController.salvarPontuacao(req, res);
})

router.get("/leaderboard", function (req, res) {
    quizController.leaderboard(req, res);
});

router.get("/kpis", function (req, res) {
    quizController.kpis(req, res);
});

module.exports = router;