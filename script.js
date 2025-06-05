const hamburger = document.getElementById("hamburger");
const navlink = document.getElementById("navlink");

hamburger.addEventListener("click", () => {
  navlink.classList.toggle("show");
});

function nextSlide() {
  slides[current].classList.remove("active");
  current = (current + 1) % slides.length;
  slides[current].classList.add("active");
}

setInterval(nextSlide, 5000);
