let valoresDeFaturamento = []
let maiorValor = 0
let mediaTotal = 0
let somaDosFaturamentos = 0
let acumulaDiasComFaturamentoMaiorAMedia = 0

fetch("dados.json").then(response => {
  response.json().then(data => {  
    valoresDeFaturamento = [...data]

    function encontrarMenorFaturamento() {
      const menorFaturamento = valoresDeFaturamento.find((element) => {
        return element.valor === 0
      })

      document.write("Menor faturamento: ", JSON.stringify(menorFaturamento.valor) + "<br>")
    }
    
    
    function encontrarMaiorFaturamento() {
      for(let index = 0; index < valoresDeFaturamento.length; index++) {
        if(valoresDeFaturamento[index].valor > maiorValor) {
          maiorValor = valoresDeFaturamento[index].valor
        }
      }

      document.write("Maior faturamento: ", maiorValor + "<br>")
    }


    function mediaMensal() {
      valoresDeFaturamento.forEach(element => {
        somaDosFaturamentos = somaDosFaturamentos + element.valor
        mediaTotal = somaDosFaturamentos / valoresDeFaturamento.length
      })

      document.write("Média mensal: ", mediaTotal + "<br>")
    }


    function faturamentosMaioresQueAMedia() {
      valoresDeFaturamento.forEach(element => {
        if(element.valor > mediaTotal) {
          acumulaDiasComFaturamentoMaiorAMedia++
        }
      })

      document.write("Apenas " + acumulaDiasComFaturamentoMaiorAMedia + " dias tiveram um faturamento maior que a média mensal" + "<br>")
    }

    encontrarMaiorFaturamento()
    encontrarMenorFaturamento()
    mediaMensal()
    faturamentosMaioresQueAMedia()
  })
})
