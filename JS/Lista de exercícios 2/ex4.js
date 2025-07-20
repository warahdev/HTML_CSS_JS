"use scrict"
//Iterando Sobre Arrays de Objetos

const pessoas = [
    {
        nome: "Paula",
        idade: 52,
        cidade: "Brasilia"
    }, {
        nome: "Maria",
        idade: 37,
        cidade: "Fortaleza"
    }, {
        nome: "Gustavo",
        idade: 78,
        cidade: "Recife"
    }
]

for (let pessoa of pessoas){
    console.log(`Nome: ${pessoa.nome}, idade: ${pessoa.idade}, cidade: ${pessoa.cidade}.`);
}