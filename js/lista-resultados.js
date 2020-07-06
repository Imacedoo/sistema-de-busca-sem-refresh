var campoBusca = $("#campo-busca");

$(function () {
    campoBusca.val("");

    campoBusca.on("keyup", function () {
        mostraLista();

        var localLista = ".palavras-encontradas";
        var palavraAPesquisar = {
            palavra: this.value
        }

        pesquisa(palavraAPesquisar, localLista);
    });
});

function mostraLista() {
    var listaDePalavras = $(".lista-de-resultados");

    campoBusca.on("keyup", function () {

        if (this.value.length > 0) {
            listaDePalavras.removeClass("invisivel");
        } else {
            listaDePalavras.addClass("invisivel");
        }
    })
}

function montaItemLista(palavras, local)
{
    var palavraSeparada = palavras.split(' ');

    for(var i = 0; i < palavraSeparada.length - 1; i++) {
        var li = document.createElement("li");
        var link = document.createElement("a");

        li.appendChild(link);
        li.classList.add(`palavra-listada${i}`);
        $(local).append(li);
        link.textContent = palavraSeparada[i];

        $(`.palavra-listada${i} a`).attr("href", `outraPagina.phtml?palavra=${palavraSeparada[i]}`);
    }
}



