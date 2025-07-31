"use strict"
const prompt = require('prompt-sync')();

//4
console.log("Informe o número da cor do semáforo: ");
console.log("1 - Verde");
console.log("2 - Amarelo");
console.log("3 - Vermelho");
let corSemaforo = Number(prompt());
let acao;

switch(corSemaforo) {
    case 1:
        acao = "Siga";
        break;
    case 2:
        acao = "Prepare-se para parar";
        break;
    case 3:
        acao = "Pare";
        break;
    default:
        acao = "Cor inválida";
}

console.log("Ação: "+acao);