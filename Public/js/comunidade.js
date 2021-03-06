function validarSessao() {
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;
  
    if(email == null || nome == null){
      alert("Você deve estar logado para acessar a Comunidade!");
      window.location = "./login.html";
    }
}

//CHART.JS:
const config = {
    type: 'bar',
    data: {
      labels: ["Flamengo", "Corinthians", "São Paulo", "Palmeiras", "Vasco", "Cruzeiro", "Grêmio", "Inter", "Santos", "Atlético Mg"],
      datasets: [{
          label: 'Maiores torcidas do Brasil ( em milhões)',
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

  var myChartLine2 = new Chart(document.getElementById("myChartRight"), config2)