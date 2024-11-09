"use scrict"
//Criando Novos Arrays a Partir de Objetos

const filmes = [
    {
        titulo: "Crepúsculo",
        diretor: "Catherine Hardwicke",
        anoLancamento: 2008
    }, {
        titulo: "Lua Nova",
        diretor: "Chris Weitz",
        anoLancamento: 2009
    }, {
        titulo: "Eclipse",
        diretor: "David Slade",
        anoLancamento: 2010
    }
];

const titulos = []; //novo array

filmes.forEach(filme => {
    titulos.push(filme.titulo);
});

console.log(`Titulos: ${titulos}`);
