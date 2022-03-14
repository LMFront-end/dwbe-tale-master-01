function hablar(texto) {
    console.log(texto);
}

function hablar_bajito(texto) {
    console.log(texto.toUpperCase());
}

exports.hablar = hablar;
exports.hablar_bajito = hablar_bajito;