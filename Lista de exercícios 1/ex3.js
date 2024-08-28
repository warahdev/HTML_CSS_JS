"use strict"
const prompt = require('prompt-sync')();

// 3
let nota = Number(prompt("Informe a nota: "));

if (nota >= 0 && nota <= 5){
    console.log(`Nota: ${nota}. Reprovado.`);
} else if (nota <= 7){
    console.log(`Nota: ${nota}. Recuperação.`);
} else if (nota <= 10){
    console.log(`Nota: ${nota}. Aprovado.`);
} else {
    console.log("Nota invalida.");
}
