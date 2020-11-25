const controller = new BuscaController();

document
    .querySelector('#campo-busca')
    .addEventListener('keyup', controller.busca.bind(controller));