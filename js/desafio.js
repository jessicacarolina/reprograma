// Desafio Mostrar o valor total do projeto
// preciso pegar o valor da hora pelo id do input - valor-hora
// pegar a quantidade de horas pelo horas-projeto
// pegar a resposta

// a função precisa calcula o valor total sendo
    // valor da hora * total de horas 
// após calcularr preciso mostrar esse resultado em tela.

// criando a variavel com o valor da hora
var valorHora = document.getElementById('valor-hora');
console.log(valorHora);

// 
var horasProjeto = document.getElementById('horas-projeto');
console.log(horasProjeto);

var resposta = document.getElementById('resposta');
console.log(resposta);

function calcular() {
    console.log('O clique está funcionando');

    var resultado = (valorHora.valueAsNumber * horasProjeto.value).toFixed(2);
    console.log(resultado);

    resposta.textContent = "R$ " + resultado;

}