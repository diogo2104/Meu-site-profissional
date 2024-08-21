let indiceAtual = 0;

function moverCarrossel(direcao) {
    const carrossel = document.querySelector('.carrossel');
    const items = document.querySelectorAll('.carrossel-item');
    const totalItems = items.length;

    indiceAtual += direcao;

    if (indiceAtual >= totalItems) {
        indiceAtual = 0;
    } else if (indiceAtual < 0) {
        indiceAtual = totalItems - 1;
    }

    carrossel.style.transform = `translateX(-${indiceAtual * 100}%)`;
}