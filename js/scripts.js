let triggerBar = document.querySelector(".trigger-bar");
let mobileSite = document.querySelector(".mobile-site");
triggerBar.onclick = function () {
  this.classList.toggle("active");
  this.previousElementSibling.classList.add("active");
};

let closeNav = document.querySelector(".close-nav");
closeNav.onclick = function () {
  this.parentElement.classList.remove("active");
  triggerBar.classList.remove("active");
};

window.onkeydown = function (e) {
  if (e.key === "Escape" || e.keyCode === 27) {
    closeNav.parentElement.classList.remove("active");
    triggerBar.classList.remove("active");
  }
};

let searchIcon = document.querySelector(
  ".search-parent > .fa-magnifying-glass"
);
searchIcon.onclick = function () {
  if (!this.nextElementSibling.classList.contains("active")) {
    this.classList.replace("fa-magnifying-glass", "fa-xmark");
  } else {
    this.classList.replace("fa-xmark", "fa-magnifying-glass");
  }
  this.nextElementSibling.classList.toggle("active");
};

// let allSlider = document.querySelectorAll(".slide-hero");
// let prev = document.querySelector(".arrows .prev");
// let next = document.querySelector(".arrows .next");
// let counterImage = 0;

// function nextSlider() {
//   counterImage === allSlider.length - 1 ? (counterImage = 0) : counterImage++;
//   allSlider[counterImage].classList.add("active")
// }
// next.onclick = nextSlider;
