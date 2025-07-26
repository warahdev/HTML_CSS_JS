"use strict"
const prompt = require('prompt-sync')();

const calculandoImc = function (peso, altura, cb) {
    let calculo = (peso / (altura ** 2)).toFixed(2); 
    console.log(calculo);
    cb(calculo);
}

const classificando = function (imc) {
    let mensagem;
    if (imc >= 0 && imc < 17) {
        mensagem = "Muito abaixo do peso";
    } else if (imc < 18.5) {
        mensagem = "Abaixo do peso";
    } else if (imc < 25) {
        mensagem = "Peso normal";
    } else if (imc < 30) {
        mensagem = "Acima do peso";
    } else if (imc < 35) {
        mensagem = "Obesidade Grau I";
    } else {
        mensagem = "Obesidade Grau II";
    }
    console.log(mensagem);
}

let peso = Number(prompt("Informe o peso: "));
let altura = Number(prompt("Informe a altura: "));

calculandoImc(peso, altura,classificando);


