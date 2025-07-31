"use scrict"
//Atualizando um Array de Objetos

const estoque = [
    {
        produto: "farinha",
        quantidade: 4,
        minimo: 5
    }, {
        produto: "arroz",
        quantidade: 10,
        minimo: 10
    }, {
        produto: "ovo",
        quantidade: 6,
        minimo: 15,
    }, {
        produto: "refrigerante",
        quantidade: 9,
        minimo: 15
    }, {
        produto: "bolacha",
        quantidade: 10,
        minimo: 20
    }
];

estoque.forEach(item => {
    if(item.quantidade < item.minimo){
        console.log(`Duplicando quantidade do produto: ${item.produto}.`)
        item.quantidade *= 2;
    }
})

console.log(estoque);