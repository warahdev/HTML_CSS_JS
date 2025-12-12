// Declarando variaveis (com let e const) e atribuindo
// Saída de dados
// Tipos de dados
// Operadores aritméticos
// Operadores de atribuição (= , += , -= , *= , /= , %= , **=)
// arredondar float

/* Faça um programa para calcular o valor de uma viagem

Você terá 3 variáveis, sendo elas:
- Preço do combustível
- Gasto médio de combustível do carro por KM
- Distância em KM da viagem

Imprima no console o valor que será gasto para realizar esta viagem. 
km / L */

const precoCombustivel = 5.79;
const kmPorLitros = 12;
const distanciaEmKm = 100;

const litrosConsumidos = distanciaEmKm / kmPorLitros;
const valorGasto = litrosConsumidos * precoCombustivel;

console.log(`O gasto para realizar esta viagem será ${valorGasto.toFixed(2)}`);
