"use scrict"
//Modificando Objetos em um Array

const produtos = [
    {
        nome: "Notebook",
        preco: 4000,
        desconto: 0
    }, {
        nome: "Celular X",
        preco: 3000,
        desconto: 0
    }, {
        nome: "Monitor",
        preco: 1200,
        desconto: 0
    }
];

produtos.forEach(produto => {
    produto.desconto = produto.preco * (1-0.10);
    console.log(`Produto: ${produto.nome}, preço original: ${produto.preco}, preço com desconto: ${produto.desconto}.`);
})