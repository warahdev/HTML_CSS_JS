"use scrict"
//Criando Relatórios com Objetos e Arrays

const vendas = [
    {
        produto: "Celular",
        quantidade: 23,
        valor: 2300
    }, {
        produto: "Notebook",
        quantidade: 3,
        valor: 5000
    }, {
        produto: "Monitor",
        quantidade: 10,
        valor: 1100
    }
]

let total = 0;
vendas.forEach(venda => {
    total += venda.quantidade * venda.valor;
})

console.log(`Valor total de vendas de todos os produtos: ${total}.`)