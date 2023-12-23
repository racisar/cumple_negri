const images = document.querySelectorAll('.image');
let currentIndex = 0;

function nextSlide() {
  images[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % images.length;
  images[currentIndex].classList.add('active');
}

setInterval(nextSlide, 3000);

function mostrarOcultarMensaje() {
  const mensajeEspecial = document.getElementById('mensajeEspecial');
  mensajeEspecial.style.display = (mensajeEspecial.style.display === 'none' || mensajeEspecial.style.display === '') ? 'block' : 'none';
}

// Mostrar la primera imagen al cargar la página
images[currentIndex].classList.add('active');
