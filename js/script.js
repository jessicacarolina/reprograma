// pega elemento de ganhos do mês

var salario = document.getElementById('ganho-mes');
console.log(salario);

// pega as horas do dia
var horasDia = document.getElementById('horas-dia');
console.log(horasDia);

// pega resultado
var resposta = document.getElementById('resposta');
console.log(resposta);

function calcularValorHora() {
    console.log('o clique está funcionando ');

    //calcula o valor total de horas do mês, considerando 22 dias uteis
    var totalDeHoras = horasDia.valueAsNumber * 22;
    console.log(totalDeHoras);
    
    var valorHora = (salario.value / totalDeHoras).toFixed(2);
    console.log(valorHora);

    resposta.textContent = "R$ " + valorHora;
}