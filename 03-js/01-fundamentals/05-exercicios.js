// Prática com funções

// Exercicio 01 - Função escrevaSeuNome
function escrevaSeuNome(nome) {
    console.log(`Olá, ${nome}! Tudo bem?`);
}

escrevaSeuNome('Estela');

// exercicio 02 - Função maiorDeIdade
function maiorDeIdade(idade) {
    if (idade < 18) {
        return `Idade: ${idade} anos. Você é menor de idade`
    } else {
        return `Idade: ${idade} anos. Você é maior de idade.`
    }
}

console.log(maiorDeIdade(18));

