var ganhoMes = document.querySelector('#ganho-mes');

var horasDia = document.querySelector('#horas-dia');

var saidaNaTela = document.querySelector('#resposta');


function calcularValorHora(){
    var salario = ganhoMes.valueAsNumber;
    var horas = horasDia.valueAsNumber;
    var diasUteisNoMes = 22;
    var horasTrabalhadasMensais = horas*diasUteisNoMes;

    var resultadoFinal = salario/horasTrabalhadasMensais

    var resultadoDuasCasas = resultadoFinal.toFixed(2);

    console.log(resultadoDuasCasas);

    saidaNaTela.textContent = 'R$ '+ resultadoDuasCasas;

}