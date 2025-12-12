"use strict"
const prompt = require('prompt-sync')();

let num = Number(prompt("Informe a tabuada que deseja: "));
for(let i = 1; i <= 10; i++){
    console.log(`${num} x ${i} = ${num * i}`);
}