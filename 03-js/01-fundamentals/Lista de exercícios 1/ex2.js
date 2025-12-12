"use strict"
const prompt = require('prompt-sync')();

// 2
let idade = Number(prompt("Informe uma idade: "));

if (idade <= 10){
    if (idade === 1){
        console.log(`${idade} ano é idade de uma criança.`);  
    } else{
        console.log(`${idade} anos é idade de uma criança.`);
    }
} else if (idade <= 20){
    console.log(`${idade} anos é idade de um adolescente.`)
} else if (idade <= 50){
    console.log(`${idade} anos é idade de um adulto.`)
} else if (idade <= 115){
    console.log(`${idade} anos é idade de um idoso.`)
} else {
    console.log("Idade invalida.")
}

