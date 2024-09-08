let meuNome = prompt("Digite um nome ou palavra para ser invertida: ")

document.write("<strong>A palavra invertida é:</strong> ")
for(let index = meuNome.length - 1; index >= 0; index--) {
  document.write(meuNome[index])
}