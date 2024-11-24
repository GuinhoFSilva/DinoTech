

function carregarKPIs() {
    fetch("/quiz/kpis").then(function (resposta) {
        if (resposta.ok) {
            if (resposta.status == 204) {
                throw "Nenhum resultado encontrado!!";
            }

            resposta.json().then(function (resposta) {
                console.log("Dados recebidos: ", JSON.stringify(resposta));
                melhorJogador.innerHTML = `${resposta[0].Melhor_Jogador}`
                mediaAcertos.innerHTML = `${resposta[0].Média_de_acertos}`
                tempoMedio.innerHTML = `${resposta[0].Tempo_Médio}`
            });
        } else {
            throw ('Houve um erro na API!');
        }
    }).catch(function (resposta) {
        console.error(resposta)
    });
}
function leaderboard(){

        fetch("/quiz/leaderboard").then(function (resposta) {
        if (resposta.ok) {
            if (resposta.status == 204) {
                throw "Nenhum resultado encontrado!!";
            }

            resposta.json().then(function (resposta) {
                console.log("Dados recebidos: ", JSON.stringify(resposta));
                for(var i = 0; i < resposta.length; i++){
                    var respostaAtual = resposta[i]
                    idjogador.innerHTML += `${respostaAtual.idUsuario}<br>`
                    nomejogador.innerHTML += ` ${respostaAtual.nome}<br>`
                    performancejogador.innerHTML += ` ${respostaAtual.performance}% <br>`
                    tempoTotal.innerHTML += `${respostaAtual.tempoTotal}<br>`
                    // ${respostaAtual.performance} - ${respostaAtual.tempoTotal} <br>
                }
            });
        } else {
            throw ('Houve um erro na API!');
        }
    }).catch(function (resposta) {
        console.error(resposta)
    });




}


// GRÁFICO CHART.JS
var grafico
function graficoPerformance() {

fetch("/quiz/leaderboard")
    .then((resposta) => {
        if (resposta.ok) {
            return resposta.json();
        } else {
            throw "Erro ao buscar dados para o gráfico!";
        }
    })
    .then((dados) => {
        var nomes = dados.map((usuario) => usuario.nome); // 
        var performances = dados.map((usuario) => usuario.performance);

    if(!grafico){

        const ctx = document.getElementById('myChart');
        
        grafico = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: nomes,
                datasets: [{
                    label: 'Performance (%)',
                    data: performances,
                    backgroundColor: [
                        'rgba(75, 192, 192, 0.5)'
                    ],
                    borderColor: [
                        'rgba(75, 192, 192, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100
                    }
                },
                
            }
        });
    }else{
            grafico.data.labels = nomes;
            grafico.data.datasets[0].data = performances;
            grafico.update();
    }
    })
    .catch((erro) => {
        console.error(erro);
    });
}

