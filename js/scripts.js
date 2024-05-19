let triggerBar = document.querySelector(".trigger-bar");
let mobileSite = document.querySelector(".mobile-site");
triggerBar.onclick = function () {
  this.classList.toggle("active");
  this.previousElementSibling.classList.add("active");
};

let closeNav = document.querySelector(".close-nav");
closeNav.onclick = function () {
  this.parentElement.parentElement.classList.remove("active");
  triggerBar.classList.remove("active");
};

window.onkeydown = function (e) {
  if (e.key === "Escape" || e.keyCode === 27) {
    closeNav.parentElement.parentElement.classList.remove("active");
    triggerBar.classList.remove("active");
  }
};

let searchParent = document.querySelector(".search-parent > i");

searchParent.onclick = function () {
  this.classList.toggle("active");
  if (this.classList.contains("active")) {
    this.classList.replace("fa-magnifying-glass", "fa-xmark");
    this.nextElementSibling.classList.add("active");
  } else {
    this.classList.replace("fa-xmark", "fa-magnifying-glass");
    this.nextElementSibling.classList.remove("active");
  }
};

let shopping = document.querySelector(".shopping > span");
shopping.onclick = function () {
  this.previousElementSibling.classList.toggle("active");
};

let allSlider = document.querySelectorAll(".slider-items");
let sliderNext = document.querySelector(".slider-next");
let sliderPrev = document.querySelector(".slider-prev");
let counterImage = 0;

function nextSlider() {
  counterImage === allSlider.length - 1 ? (counterImage = 0) : counterImage++;
  removeToggleClass();
  movingFade();
}
sliderNext.onclick = nextSlider;

function prevSlider() {
  counterImage === 0 ? (counterImage = allSlider.length - 1) : counterImage--;
  removeToggleClass();
  movingFade();
}
sliderPrev.onclick = prevSlider;

function movingFade() {
  allSlider[counterImage].classList.add("fade");
}

function removeToggleClass() {
  allSlider.forEach((el) => el.classList.remove("fade"));
}
