"use scrict"
//Filtrando e Somando Valores

const transacoes = [
    {
        tipo: "entrada",
        valor: 3000
    }, {
        tipo: "entrada",
        valor: 10
    }, {
        tipo: "saida",
        valor: 220
    }, {
        tipo: "entrada",
        valor: 1000
    }, {
        tipo: "saida",
        valor: 700
    }
];

let saldo = 0;

transacoes.forEach(transacao => {
    if(transacao.tipo === "entrada"){
        saldo += transacao.valor;
    } else {
        saldo -= transacao.valor;
    }
});

console.log(`Saldo final: ${saldo}`)