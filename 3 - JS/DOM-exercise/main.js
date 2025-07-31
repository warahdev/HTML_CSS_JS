
function mensagem(){
    alert("Que seu dia seja lindo igual você! ♥", "Teste")
}

(function nome(){
    const nome = "Estela";
    //document.getElementById("saudacao").textContent="Bem vinda "+nome;
    document.querySelector(".top-saudacao p").innerHTML += "<b>" + nome + "</b>"; //irá manter o texto original que se encontra dentro da tag p e vai somar com a variavel 'nome' que concatenamos
        // document.querySelector(".top-saudacao p").innerHTML --> devolve o valore original lá do HTML
        // innerHTML --> possibilita inserir tags do HTML
        // textContent --> só mostra como texto
})()
