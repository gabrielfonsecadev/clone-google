var div = document.querySelector('div');

function mudarFundo() {
    if (div.classList.contains('procura')) {
        div.classList.remove('procura');
        console.log("Deu certo")
    }
}

function mudarFundoBody() {
    if (div.classList.contains('fundo')) {
        div.classList.add('procura');
    }
}