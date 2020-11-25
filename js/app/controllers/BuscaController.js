class BuscaController {

    constructor() {

        this._campoBusca = document.querySelector('#campo-busca');

        this._buscaPalavraTermo = new BuscaPalavraTermo();

        this._campoBusca.value = '';
    }

    busca() {

        this._buscaPalavraTermo
            .busca(this._campoBusca.value)
    }
}