/*const robotron = document.querySelector("#robotron")

robotron.addEventListener("click", dizOi)

// FUNÇÃO DECLARADA
// possui nome, é possível invocar quando necessário
function dizOi(nome) {
  console.log("Oi " + nome)
  console.log("Bem-vindo ao Robotron 2000")
}

dizOi("Pedro")

// FUNÇÃO ANÔNIMA
// a função é declarada sem ser necessário nomear a mesma
// não é possível chamar ela mais vezes em outros partes do codigo
robotron.addEventListener("click", function() {
  console.log('Função Anônima')
})
// abaixo té exibido outra forma de declarar uma Função ANÔNIMA
robotron.addEventListener("click", () => {
  console.log('Função Anomina Simplificada (função de seta)')
})
*/

const controle = document.querySelectorAll("[data-controle]")
const estatisticas = document.querySelectorAll("[data-estatistica]")
console.log(estatisticas)

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -4
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 43
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach( (elemento) => {
  elemento.addEventListener("click", (evento) => {
      manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
      atualizaEstatisticas(evento.target.dataset.peca)
  })
})

/*
somar.addEventListener("click",() => {manipulaDados("somar")})
subtrair.addEventListener("click", () => {manipulaDados("subtrair")})
*/

function manipulaDados(operacao, controle){
  const peca = controle.querySelector("[data-contador]")
  if(operacao === "-"){
    peca.value = parseInt(peca.value) - 1
  } else {
    peca.value = parseInt(peca.value) + 1
  }
}

function atualizaEstatisticas(peca) {
  console.log(pecas[peca])

  estatisticas.forEach( (elemento) => {
    //console.log(elemento.dataset.estatistica)
    //console.log(elemento.textContent)
    elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
  });

}
