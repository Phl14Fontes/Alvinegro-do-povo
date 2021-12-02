function validarSessao() {
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;

    if(email == null && nome == null){
      alert("Esta sessão expirou!");
      sair();
    }
}

function sair() {
    sessionStorage.clear();
    window.location = "../login.html";
}

//CHART.JS:
const config = {
    type: 'bar',
    data: {
      labels: ["Flamengo", "Corinthians", "São Paulo", "Palmeiras", "Vasco", "Cruzeiro", "Grêmio", "Inter", "Santos", "Atlético Mg"],
      datasets: [{
          label: 'Maiores torcidas do Brasil (em milhões)',
          data: [43, 30, 17, 13, 8, 8, 8, 6, 6, 4],
          backgroundColor: [
            "#c22a1e",
            "#000",
            "#fe0000",
            "#006437",
            "#7a786d",
            "#005ba2",
            "#0d80bf",
            "#c20c18",
            "#353839",
            "#111"
          ],
          borderWidth: 1
        }
      ]
    },//fim data
    options: {
      maintainAspectRatio: false,
      scales: {
        //cor dos elementos dos eixos
        y: {
          ticks: {
            color: '#3f0569'
          }
        },
        x: {
          ticks: {
            color: '#000'
          }
        }
     }, //fim options
    }
  };

  var myChartLine = new Chart(document.getElementById("myChartLeft"), config);

  const config2 = {
    type: "pie",
    data:{
      labels: ['Corinthians', 'São Paulo', 'Palmeiras', 'Santos'],
      datasets: [{
        label: 'Número de torcedores no estado de SP (em milhões)',
        data: [30, 17, 13, 6],
        backgroundColor: [
          '#000',
          '#fe0000',
          '#006437',
          '#d3d3d3'
        ]
      }]
    },//fim data
    options: {
      maintainAspectRatio: false,
    }
  };

  var myChartLine2 = new Chart(document.getElementById("myChartRight"), config2);


window.onload = verifica_conexao_banco();

function verifica_conexao_banco(idVoto) {


        fetch(`/medidas/votos/${idVoto}`, { cache: 'no-store' }).then(function (response) {
            if (response.ok) {
                response.json().then(function (resposta) {
                    console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
                    resposta.reverse();
                    console.log('Dados encontrados, aguardando plotar');
                    plotarGrafico(resposta, idVoto);

                });
            } else {
                console.error('Nenhum dado encontrado ou erro na API');
            }
        })
            .catch(function (error) {
                console.error(`Erro na obtenção dos dados p/ gráfico: ${error.message}`);
            });
    }
    
function plotarGrafico(resposta, idVoto) {
        console.log('iniciando plotagem do gráfico...');

    //Grafico Dinamico:
  const config3 ={
    type: 'bar',
    data: {
      labels: ['TOTAL VOTOS', 'NETO', 'MARCELINHO'],
      datasets: [{
        label: 'Resultado Parcial Enquete',
        //.totalVotos é o apelido da coluna no BD;
        data: [resposta[0].totalVotos, resposta[0].opcao1, resposta[0].opcao2],
        backgroundColor: [
          '#ffd700',
          '#dcdcdc',
          '#000'
        ],
        borderColor: [
          '#3f0569',
          '#111',
          '#f8f8f8'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          maintainAspectRatio: false,
            ticks: {
              color: '#000'
          }
        },
        x: {
          maintainAspectRatio: false,
          ticks: {
            color: '#000'
          }
        },
      }
    },
  };

  var myChartLine3 = new Chart(document.getElementById("grafico_enquete"), config3); 
}

function votar1(){
    var opcao1Var = 1;

  fetch("/escolha/votar", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        opcao1: opcao1Var,
    })
}).then(function (resposta) {

    console.log( resposta);
    console.log( "resposta");

    if (resposta.ok) {
        console.log("Voto computado!");
    } else {
        alert("Houve um erro ao tentar realizar o voto!");
    }
}).catch(function (resposta) {
    console.log(`#ERRO: ${resposta}`);
});
    window.location.reload();
}


function votar2(){
  var opcao2Var = 1;

fetch("/escolha/votar2", {
  method: "POST",
  headers: {
      "Content-Type": "application/json"
  },
  body: JSON.stringify({
      opcao2: opcao2Var,
  })
}).then(function (resposta) {

  console.log( resposta);
  console.log( "resposta");

  if (resposta.ok) {
      console.log("Voto computado!");
  } else {
      alert("Houve um erro ao tentar realizar o voto!");
  }
}).catch(function (resposta) {
  console.log(`#ERRO: ${resposta}`);
});
  window.location.reload();
}
