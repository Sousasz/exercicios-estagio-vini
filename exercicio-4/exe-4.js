const faturamentoDosEstados = [
  {
    estado: "São Paulo",
    faturamento: 67.8343
  },
  {
    estado: "Rio de Janeiro",
    faturamento: 36.67866
  },
  {
    estado: "Minas Gerais",
    faturamento: 29.22988
  },
  {
    estado: "Espírito Santo",
    faturamento: 27.16548
  },
  {
    estado: "Outros",
    faturamento: 19.84953
  }
]

let somaDosFaturamentos = 0
let percentualDeRepresentacao = 0


function faturamentoDeSaoPaulo() {
  faturamentoDosEstados.forEach((element) => {
    somaDosFaturamentos = somaDosFaturamentos + element.faturamento
    faturamentoTotal = (67.8343 / somaDosFaturamentos) * 100
  })  

  console.log("O percentual de representação de São Paulo é " + parseInt(faturamentoTotal) + "%")
}

function faturamentoDoRioDeJaneiro() {
  faturamentoDosEstados.forEach((element) => {
    somaDosFaturamentos = somaDosFaturamentos + element.faturamento
    faturamentoTotal = (36.67866 / somaDosFaturamentos) * 100
  })  

  console.log("O percentual de representação do Rio de Janeiro é " + parseInt(faturamentoTotal) + "%")
}

function faturamentoDeMinasGerais() {
  faturamentoDosEstados.forEach((element) => {
    somaDosFaturamentos = somaDosFaturamentos + element.faturamento
    faturamentoTotal = (29.22988 / somaDosFaturamentos) * 100
  })  

  console.log("O percentual de representação de Minas Gerais é " + parseInt(faturamentoTotal) + "%")
}


function faturamentoDoEspiritoSanto() {
  faturamentoDosEstados.forEach((element) => {
    somaDosFaturamentos = somaDosFaturamentos + element.faturamento
    faturamentoTotal = (27.16548 / somaDosFaturamentos) * 100
  })  

  console.log("O percentual de representação do Espírito Santo é " + parseInt(faturamentoTotal) + "%")
}

function faturamentoDeOutrosEstados() {
  faturamentoDosEstados.forEach((element) => {
    somaDosFaturamentos = somaDosFaturamentos + element.faturamento
    faturamentoTotal = (19.84953 / somaDosFaturamentos) * 100
  })  

  console.log("O percentual de representação de outros estados é " + parseInt(faturamentoTotal) + "%")
} 

faturamentoDeSaoPaulo()
faturamentoDoRioDeJaneiro()
faturamentoDeMinasGerais()
faturamentoDoEspiritoSanto()
faturamentoDeOutrosEstados()