// Prática com operadores e condicionais
// Exercicio 01

// Faça um algoritmo que dado as 3 notas tiradas por um aluno em um sementre da faculdade, calcule e imprima sua média e
// a sua classificação conforme a tabela abaixo:

// Classificação:
// - Média menor que 5, reprovação
// - Média entre 5 e 7, recuperação
// - Média acima de 7, passou de semestre

const nota01 = 8;
const nota02 = 7;
const nota03 = 7;

const media = (nota01 + nota02 + nota03) / 3;
console.log(`Média: ${media.toFixed(2)}`)

if (media < 5) {
    console.log('Reprovação')
} else if (media <= 7) {
    console.log('Recuperação')
} else {
    console.log('Passou de semestre!')
}

// Exercicio 02

// Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo:
// IMC em adultos:
// - Abaixo de 18,5, abaixo do peso
// - Entre 18,5 e 25, peso normal
// - Entre 25 e 30, acima do peso
// - Entre 30 e 40, obeso
// - Acima de 40, obesidade grave

const peso = 50;
const altura = 1.56;
const imc = peso / (altura ** 2);

console.log(`IMC: ${imc.toFixed(2)}`)

if (imc < 18.5) {
    console.log('Abaixo do peso')
} else if (imc < 25) {
    console.log('Peso normal')
} else if (imc < 30) {
    console.log('Acima do peso')
} else if (imc <= 40) {
    console.log('Obeso')
} else {
    console.log('Obesidade grave')
}