class BuscaPalavraTermo {

    constructor() {

        this._view = new BuscaPalavraTermoView();
    }

    busca(referencia) {

        let service = new BuscaService();

        service
            .obterResultado(referencia)
            .then(resultados => this._view.update(resultados));
    }
}