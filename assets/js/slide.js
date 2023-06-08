const slides = document.querySelectorAll(".slidercomponent");
let currentSlide = 0;
const slideInterval = setInterval(nextSlide, 4000);

function nextSlide() {
  backSlide = (currentSlide + 0) % slides.length;
  slides[currentSlide].className = "back";

  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].className = "current";

  frontSlide = (currentSlide + 1) % slides.length;
  slides[frontSlide].className = "front";

  hiddenSlide = (currentSlide + 2) % slides.length;
  slides[hiddenSlide].className = "hidden";
}
