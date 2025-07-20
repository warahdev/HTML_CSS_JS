"use scrict"
//Implementando um Carrinho de Compras

const carrinho = {
    itens: [
        {
            nome: "Notebook",
            quantidade: 3,
            precoUnitario: 2000
        }, {
            nome: "Celular",
            quantidade: 2,
            precoUnitario: 1100
        }, {
            nome: "Cabo Tipo C",
            quantidade: 4,
            precoUnitario: 34
        }, {
            nome: "Pelicua",
            quantidade: 4,
            precoUnitario: 28
        }
    ]
};

let valorTotal = 0;

carrinho.itens.forEach(item => {
    valorTotal = item.quantidade * item.precoUnitario;
});

console.log(`Valor total do carrinho: ${valorTotal}.`);