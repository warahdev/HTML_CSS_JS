"use scrict"
const prompt = require('prompt-sync')();

//Filtrando Arrays de Objetos

const funcionarios = [
    {
        nome: "José",
        cargo: "Analista",
        salario: 5400
    }, {
        nome: "Paulo",
        cargo: "Aprendiz",
        salario: 800,
    }, {
        nome: "Antonia",
        cargo: "Gerente",
        salario: 14000
    }
];

let valorEspecifico = Number(prompt("Informe um valor especifico:"));

for (let funcionario of funcionarios){
    if (funcionario.salario > valorEspecifico){
        console.log(`Nome: ${funcionario.nome}, cargo: ${funcionario.cargo}, salario: R$${funcionario.salario}.`);
    }
}