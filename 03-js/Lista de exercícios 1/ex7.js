"use strict"
const prompt = require('prompt-sync')();

let quantidade = Number(prompt("Informe quantas maçãs deseja comprar: "));
let custo;

if(quantidade < 12){
    custo = quantidade * 0.3
} else{
    custo = quantidade * 0.25
}
console.log(`Total de maçãs: ${quantidade}. Total da compra: ${custo.toFixed(2)}`);