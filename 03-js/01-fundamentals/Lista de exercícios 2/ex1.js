"use scrict"

//Acessando propriedades de objetos

const carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2020,
    cor: "Prata",
}

for (let propriedade in carro){
    console.log(`${propriedade}: ${carro[propriedade]}`);
}