"use strict"
const prompt = require('prompt-sync')();

let peso = Number(prompt("Informe o peso (kg): "));
let altura = Number(prompt("Informe a altura (m): "));
let imc = peso / (altura ** 2);
let categoria;

if (imc > 0 && imc < 18.5){
    categoria = "baixo peso"
} else if (imc <= 24.99){
    categoria = "normal"
} else if (imc <= 29.99){
    categoria = "sobrepeso"
} else {
    categoria = "obesidade"
}
console.log(`IMC: ${imc.toFixed(2)}. Classificação: ${categoria}.`)