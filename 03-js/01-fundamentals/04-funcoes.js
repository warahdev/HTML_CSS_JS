// Funções
// Função anônima

function incrementarJuros(valor, percentualJuros) {
    const valorDeAcrecimo = (percentualJuros / 100) * valor;
    return valor + valorDeAcrecimo;
}

console.log(incrementarJuros(100,10));

// Ajustando o exercicio anterior utilizando funções
// Exercicio IMC:

function calculoImc(peso, altura) {
    return peso / (altura ** 2);
}

function classificacaoImc(imc) {
    if (imc < 18.5) {
        return 'Abaixo do peso';
    } else if (imc < 25) {
        return 'Peso normal';
    } else if (imc < 30) {
        return 'Acima do peso';
    } else if (imc <= 40) {
        return 'Obeso';
    } else {
        return 'Obesidade grave';
    }
}

(function () {
    const peso = 50;
    const altura = 1.56;
    const imc = calculoImc(peso, altura);

    console.log(`IMC: ${imc.toFixed(2)}`)
    console.log(classificacaoImc(imc))
}) ();

