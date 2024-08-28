"use strict"
const prompt = require('prompt-sync')();

let num = Number(prompt("Informe um número: "))
let sum = num;
let quantidade = 0;

while(num !== 0){
    num = Number(prompt());
    sum += num;
    quantidade ++;
}

console.log(`Média: ${(sum / quantidade).toFixed(2)}`);