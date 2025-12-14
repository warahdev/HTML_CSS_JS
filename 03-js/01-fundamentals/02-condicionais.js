// Operadores de comparação
// Estrutura condicional
// operador lógico

// exercicio 01 - número par ou impar
const numero = 3;

const numeroPar = (numero % 2) == 0;
console.log(numeroPar);

if (numeroPar) {
    console.log('O número é par.');
}

if (!numeroPar) {
    console.log('O número é ímpar.');
}

// exercicio 02

// Faça um programa para calcular o valor de uma viagem:
// Você terá 5 variáveis, sendo elas:
// - Preço do etanol
// - Preço do gasolina
// - O tipo de combustivel que esta no seu carro
// - Gastos medio de combustivel do carro por KM
// - Distancia em KM viagem

const precoEtanol = 7.59;
const precoGasolina = 5.60;
const tipoCombustivel = 'etanol';
const kmPorLitros = 12;
const distanciaEmKm = 100;

const litrosConsumidos = distanciaEmKm / kmPorLitros;

if (tipoCombustivel == 'etanol') {
    const valorGasto = litrosConsumidos * precoEtanol;
    onsole.log(`Valor gasto ${valorGasto.toFixed(2)}.`);
} else if (tipoCombustivel == 'gasolina') {
    const valorGasto = litrosConsumidos * precoGasolina;
    console.log(`Valor gasto ${valorGasto.toFixed(2)}.`);
} else {
    console.log('Tipo de combustivel invalido.');
}
