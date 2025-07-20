"use strict"
const prompt = require('prompt-sync')();

let num;
// 1
num = Number(prompt("Informe um número: "));
if (num % 2 === 0) {
    console.log(`O número ${num} é par.`);
} else {
    console.log(`O número ${num} é ímpar.`);
}