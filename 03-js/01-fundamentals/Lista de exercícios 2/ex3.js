"use scrict"
//Filtrando propriedades de objetos

const produto = {
    nome: "Notebook",
    preco: 5000,
    preso: 2,
    estoque: 29,
    garantia: 36
};

function filtraPropriedade(objeto, valor){
    const filtro = {};

    for (let propriedade in produto){
        if (objeto[propriedade] > valor) {
            filtro[propriedade] = objeto[propriedade];
        }
    }
    return filtro;
}

const resultado = filtraPropriedade(produto, 20);
console.log(resultado);