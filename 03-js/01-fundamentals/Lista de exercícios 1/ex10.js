"use strict"
const prompt = require('prompt-sync')();

let num = Number(prompt("Informe um número:"));
for(let i = 0; i < 10; i++){
    console.log(num);
}