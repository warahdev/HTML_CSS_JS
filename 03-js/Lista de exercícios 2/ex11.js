"use scrict"
//Agrupando Elementos com forEach

const pedidos = [
    {
        cliente: "Maria",
        produto: "manga",
        quantidade: 2
    }, {
        cliente: "Ana",
        produto: "morango",
        quantidade: 10
    }, {
        cliente: "Paula",
        produto: "laranja",
        quantidade: 10
    }, {
        cliente: "Ana",
        produto: "limão",
        quantidade: 20
    }
]

const porCliente = {};

pedidos.forEach(pedido => {
    if(porCliente[pedido.cliente]){
        porCliente[pedido.cliente] += pedido.quantidade;
    } else {
        porCliente[pedido.cliente] = pedido.quantidade;
    }
})

console.log(porCliente)