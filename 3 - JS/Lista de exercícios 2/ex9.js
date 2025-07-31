"use scrict"
//Contabilizando Elementos com uma Condição

const funcionarios = [
    {
        nome: "Lucas",
        idade: 24,
        cidade: "São Paulo"
    }, {
        nome: "Maria",
        idade: 39,
        cidade: "São Paulo"
    }, {
        nome: "Giovana",
        idade: 19,
        cidade: "Rio de Janeiro"
    }, {
        nome: "Claudia",
        idade: 68,
        cidade: "Recife"
    }, {
        nome: "Caio",
        idade: 57,
        cidade: "Londrina"
    }  
];

let quantidade = 0;

funcionarios.forEach(funcionario => {
    if (funcionario.idade > 30){
        quantidade++;
    }
})

console.log(`${quantidade} funcionarios têm mais de 30 anos.`)