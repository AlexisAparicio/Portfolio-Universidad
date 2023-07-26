// Movimiento del carrusel
const carouselImages = document.querySelector(".carousel-images");
let isMouseDown = false;
let startX, scrollLeft;

carouselImages.addEventListener("mousedown", (e) => {
  isMouseDown = true;
  startX = e.pageX - carouselImages.offsetLeft;
  scrollLeft = carouselImages.scrollLeft;
});

carouselImages.addEventListener("mouseleave", () => {
  isMouseDown = false;
});

carouselImages.addEventListener("mouseup", () => {
  isMouseDown = false;
});

carouselImages.addEventListener("mousemove", (e) => {
  if (!isMouseDown) return;
  e.preventDefault();
  const x = e.pageX - carouselImages.offsetLeft;
  const walk = (x - startX) * 2; // Ajusta la velocidad del carrusel

  carouselImages.scrollLeft = scrollLeft - walk;
});