function pesquisar() {
    let section = document.getElementById("resultados-pesquisa"); //determina com o ID no HTML

    let campoPesquisa = document.getElementById("campo-pesquisa").value; //apenas o conteudo

    console.log(campoPesquisa);

    if (!campoPesquisa){
        section.innerHTML = "<p>Nada foi encontrado. Você precisa informar um personagem.</p>";
        return;
    }

    campoPesquisa = campoPesquisa.toLowerCase();

    let resultados = "";
    let titulo = "";
    let descricao = "";

    for (let dado of dados) { //laço de repetição para percorrer a lista de objetos "dados"
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        //console.log(dado.titulo.includes(campoPesquisa))
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)) { //se for verdadeiro
            resultados += ` <!-- a crase é muito IMPORTANTE nesta hora!!!! -->
                <div class="item-resultado">
                    <h2>
                        <a href="#" target="_blank">${dado.titulo}</a>
                    </h2>
                    <p class="descricao-meta">${dado.descricao}</p>
                    <p>${dado.aniversario}</p>
                </div>
            `;
        }   
    }

    section.innerHTML = resultados; //atribuindo a variavel resultados na section, manipulação única recomendado
}
