const image = document.getElementById('myImage');
let positionX = 0; // Inicialmente, la imagen estará en la posición más a la izquierda

document.addEventListener('keydown', (event) => {
    const key = event.key;

    // Mover la imagen a la derecha si se presiona la tecla "D" o la flecha derecha
    if (key === 'd' || key === 'ArrowRight') {
        positionX += 100; // Incrementa la posición en 10 píxeles hacia la derecha
        image.style.left = `${positionX}px`;
    }

    // Mover la imagen a la izquierda si se presiona la tecla "A" o la flecha izquierda
    if (key === 'a' || key === 'ArrowLeft') {
        positionX -= 100; // Decrementa la posición en 10 píxeles hacia la izquierda
        image.style.left = `${positionX}px`;
    }
});
