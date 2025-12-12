"use scrict"
//Calculando Valores em Arrays de Objetos

const alunos = [
    {
        nome: "Caio",
        nota1: 4.0,
        nota2: 3.5
    }, {
        nome: "Claudia",
        nota1: 7.0,
        nota2: 9.0
    }, {
        nome: "Ricardo",
        nota1: 1.0,
        nota2: 10.0
    }
];

let media = 0;

for(let aluno of alunos){
    media = (aluno.nota1 + aluno.nota2) / 2;
    console.log(`Nome: ${aluno.nome}, média: ${media}.`)
}