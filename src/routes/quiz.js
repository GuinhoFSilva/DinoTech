var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

router.post("/salvarPontuacao", function (req, res) {
    quizController.salvarPontuacao(req, res);
})


module.exports = router;