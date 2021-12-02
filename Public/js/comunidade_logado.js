//checar se ele está logado;
function validarSessao() {
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;

    var nome_span = document.getElementById("nome_usuario_header")
    if(email != null && nome != null){
        nome_span.innerHTML += `${nome}`;
    } //else{
    //   alert("Esta sessão expirou!");
    //   sair();
    // }
}

//se clicar em SAIR;
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

  /*Grafico Dinamico:
  const config3 ={
    type: 'bar',
    data: {
      labels: ['TOTAL VOTOS', 'NETO', 'MARCELINHO'],
      datasets: [{
        label: 'Resultado Parcial Enquete',
        data: [BD DINAMICO115 , 75, 40],
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

  var myChartLine3 = new Chart(document.getElementById("grafico_enquete"), config3); */ 

function voto(){
    //function do insert;
}


window.onload = verificar_interacao_grafico();

function verificar_interacao_grafico(idVoto) {


        fetch(`/medidas/votos/${idVoto}`, { cache: 'no-store' }).then(function (response) {
            if (response.ok) {
                response.json().then(function (resposta) {
                    console.log(`Dados recebidos: ${JSON.stringify(resposta)}`);
                    resposta.reverse();
                    console.log('a resposta retornou um valor, agora se chegou no gráfico ainda não sabemos');
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
     //  resposta[0].interacao_big, resposta[0].buracosNegros, resposta[0].multiversos, resposta[0].bigCrunch
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
  /*function plotarGrafico(resposta, idAquario) {
        console.log('iniciando plotagem do gráfico...');

        const coluna = {
            type: "bar",
            data: {
                labels: ["Big Bang", "Buracos Negros", "Multiversos", "Big Crunch"],
                datasets: [{
                    label: ["Análise conteúdo"],
                    data: [resposta[0].interacao_big, resposta[0].buracosNegros, resposta[0].multiversos, resposta[0].bigCrunch],
                    backgroundColor: ["#800000", "#003153", "#90ee90", "#d75413",],
                    color: "red",
                }
                ]
            },
            options: {
                labels: { color: "red" },
                maintainAspectRatio: false
            }

        }

        var myChartcolumn = new Chart(document.getElementById("grafico_coluna"), coluna);


    } */


    }