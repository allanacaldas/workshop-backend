console.log('teste');

var valorHora = document.querySelector('#valor-hora');
var horasDoProjeto = document.querySelector('#horas-projeto');
var resposta = document.querySelector('#resposta');




function calcular() {
    var valorHoraCobradaNoProjeto = valorHora.valueAsNumber;
    var horasExigidasNoProjeto = horasDoProjeto.valueAsNumber;

    var valorTotalDoProjeto = valorHoraCobradaNoProjeto * horasExigidasNoProjeto;
    
    resposta.textContent = 'R$ ' + valorTotalDoProjeto;

}