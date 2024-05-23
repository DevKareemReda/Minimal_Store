$('.responsive').slick({
  dots: false,
  arrows: true,
  infinite: true,
  speed: 600,
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: `<span class="slick-arrow slick__prev" style=""><svg viewBox="0 0 256 256"><polyline fill="none" stroke="#717171" stroke-width="16" stroke-linejoin="round" stroke-linecap="round" points="184,16 72,128 184,240"></polyline></svg></span>`,
  nextArrow: `<span class="slick-arrow slick__next" style=""><svg viewBox="0 0 256 256"><polyline fill="none" stroke="#717171" stroke-width="16" stroke-linejoin="round" stroke-linecap="round" points="72,16 184,128 72,240"></polyline></svg></span>`,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        infinite: true,
      }
    },
    {
      breakpoint: 775,
      settings: {
        slidesToShow: 2,
        arrows: false,
      }
    },
    {
      breakpoint: 650,
      settings: {
        slidesToShow: 2,
        arrows: false,
      }
    },
    {
      breakpoint: 550,
      settings: {
        slidesToShow: 1,
        arrows: false,
      }
    },
  ]
});


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
