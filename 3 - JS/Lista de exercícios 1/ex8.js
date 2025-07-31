"use strict"
const prompt = require('prompt-sync')();

console.log("Informe dois números: ");
let num1 = Number(prompt());
let num2 = Number(prompt());

if (num1 !== num2){
    if(num1 > num2){
        console.log(`${num2}, ${num1}.`);
    } else{
        console.log(`${num1}, ${num2}.`);
    }
} else{
    console.log("Os números não podem ser iguais.")
}