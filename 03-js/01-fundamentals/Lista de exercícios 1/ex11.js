"use strict"
const prompt = require('prompt-sync')();

console.log("Informe 5 números:");
let sum = 0, num;

for(let i = 0; i < 5; i++){
    num = Number(prompt());
    sum += num;
}

console.log(`Soma total dos números: ${sum}`);
