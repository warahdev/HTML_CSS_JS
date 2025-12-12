"use strict"
const prompt = require('prompt-sync')();

console.log("Informe três lados de um triângulo: ");
let a = Number(prompt());
let b = Number(prompt());
let c = Number(prompt());

let tipoTriangulo;
if(a + b > c && a + c > b && b + c > a){
    if (a === b && b === c) { //todos os lados iguais
        tipoTriangulo = "equilátero"; 
    } else if (a === b || a === c || b === c) { //dois lados iguais
        tipoTriangulo = "isósceles";
    } else { //dois lados iguais
        tipoTriangulo = "escaleno";
    }   
} else {
    console.log("Atenção!ados invalidos, não seguem a condição de existencia de um triângulo.")
}

console.log(`Os lados informados correspondem ao triângulo ${tipoTriangulo}`);
