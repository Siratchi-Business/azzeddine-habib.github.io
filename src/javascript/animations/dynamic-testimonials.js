let indice = 0;
const testimonios = document.querySelectorAll('.testimonial');

function mostrarSiguienteTestimonio() {
    testimonios[indice].classList.remove('active');
    indice = (indice + 1) % testimonios.length;
    testimonios[indice].classList.add('active');
}

setInterval(mostrarSiguienteTestimonio, 5000);