class BuscaPalavraTermoView {

    constructor() {

        this._elemento = document.querySelector('#lista-resultados');
    }

    _template(palavras) {
        return `
            <ul class="palavras-encontradas">
                ${palavras.map(palavra => `
                    <li class="palavra-listada"><a>${palavra}</a></li>
                `).join(' ')}
            </ul>
        `
    }

    update(palavras) {

        if(palavras.length === 0) {
            this._elemento.classList.add('invisivel');
        } else {
            this._elemento.classList.remove('invisivel');
        }

        this._elemento.innerHTML = this._template(palavras);
    }
}