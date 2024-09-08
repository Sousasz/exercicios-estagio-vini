const sequenciaDeFibonnacci = [0, 1]
let proximoValor = 0
let segundoProximoValor = 0
let valor1 = 0
let valor2 = 0
let valorDigitado = Number(prompt("Digite um número"))

for(let index = 0; index <= valorDigitado; index++) {
  valor1 = sequenciaDeFibonnacci[sequenciaDeFibonnacci.length - 1]
  valor2 = sequenciaDeFibonnacci[sequenciaDeFibonnacci.length - 2]

  proximoValor = valor1 + valor2
  segundoProximoValor = proximoValor + valor1

  valor1 = proximoValor;
  valor2 = segundoProximoValor
  sequenciaDeFibonnacci.push(valor1)
  sequenciaDeFibonnacci.push(valor2)
}

if(sequenciaDeFibonnacci.includes(valorDigitado)) {
  document.write(`<p style='color: green'>O número ${valorDigitado} pertence a sequência de Fibonacci</p>`)
} else {
  document.write(`<p style='color: red'>O número ${valorDigitado} não pertence a sequência de Fibonacci</p>`)
}

while(isNaN(valorDigitado) === true) {
  valorDigitado = Number(prompt("Digite apenas números"))
}