"use scrict"
//verificando propriedades

const livro = {
    titulo: "Crepúsculo",
    autor: "Stephenie Meyer",
    anoPublicacao: 2005,
    genero: "Romance",
}

for (let propriedade in livro){
    if (!(propriedade === "editora")){
        console.log("A propriedade 'editora' não existe. Adicionando...");
        livro.editora = "Intrinseca";
        break;
    }
}


/* UTILIZANDO IF IN. . .
if (!('editora' in livro)) {
    console.log("A propriedade 'editora' não existe. Adicionando...");
    livro.editora = "Intrinseca";
}
*/

console.log(`\nAtualização:`)
for (let propriedade in livro){
    console.log(`${propriedade}: ${livro[propriedade]}`);
}
