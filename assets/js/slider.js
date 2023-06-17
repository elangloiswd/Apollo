const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let currentItem = 0;
const slide = Array.from(document.querySelectorAll("ul.banner > li"));

slide[currentItem].classList.add("active");

next.addEventListener("click", function () {
  slide[currentItem].classList.remove("active");
  currentItem = (currentItem + 1) % slide.length;
  slide[currentItem].classList.add("active");
});

prev.addEventListener("click", function () {
  slide[currentItem].classList.remove("active");
  currentItem = (currentItem - 1) % slide.length;
  slide[currentItem].classList.add("active");
});
