$(function () {
  $(".responsive").slick({
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
        },
      },
      {
        breakpoint: 775,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true
        },
      },
    ],
  });
});

// all products
const store = [
  {
    id: 1,
    title: "Aster Backpack",
    price: 69.99,
    description:
      "Dynamically enable functional sources through distributed services. Proactively restore cross-platform platforms after functionalized technologies",
    images: [
      "https://demo.kallyas.net/minimal-store/wp-content/uploads/sites/91/2018/01/product01-1.jpg",
      "https://demo.kallyas.net/minimal-store/wp-content/uploads/sites/91/2018/01/product01b-1.jpg",
      "https://demo.kallyas.net/minimal-store/wp-content/uploads/sites/91/2018/01/product01c-1.jpg",
    ],
    rating: {
      count: 943467,
    },
    quantity: 1,
  },
  {
    id: 2,
    title: "Blue Bag",
    price: 148.99,
    description:
      "Dynamically enable functional sources through distributed services. Proactively restore cross-platform platforms after functionalized technologies",
    images: [
      "https://demo.kallyas.net/minimal-store/wp-content/uploads/sites/91/2018/01/product08-1.jpg",
      "https://demo.kallyas.net/minimal-store/wp-content/uploads/sites/91/2018/01/product08b-1-768x768.jpg",
    ],
    rating: {
      count: 943434,
    },
    quantity: 1,
  },
  {
    id: 3,
    title: "Coast Bag",
    price: 128.99,
    description:
      "Dynamically enable functional sources through distributed services. Proactively restore cross-platform platforms after functionalized technologies",
    images: [
      "https://demo.kallyas.net/minimal-store/wp-content/uploads/sites/91/2018/01/product09-1.jpg",
      "https://demo.kallyas.net/minimal-store/wp-content/uploads/sites/91/2018/01/product09b-1-768x768.jpg",
    ],
    rating: {
      count: 943435,
    },
    quantity: 1,
  },
  {
    id: 4,
    title: "Eugene Wallet",
    price: 49.99,
    description:
      "Dynamically enable functional sources through distributed services. Proactively restore cross-platform platforms after functionalized technologies",
    images: [
      "https://demo.kallyas.net/minimal-store/wp-content/uploads/sites/91/2018/01/product07-1.jpg",
      "https://demo.kallyas.net/minimal-store/wp-content/uploads/sites/91/2018/01/product07b-1-768x768.jpg",
    ],
    rating: {
      count: 943448,
    },
    quantity: 1,
  },
  {
    id: 5,
    title: "Grey Beanie",
    price: 29.99,
    description:
      "Dynamically enable functional sources through distributed services. Proactively restore cross-platform platforms after functionalized technologies",
    images: [
      "https://demo.kallyas.net/minimal-store/wp-content/uploads/sites/91/2018/01/product04-1.jpg",
      "https://demo.kallyas.net/minimal-store/wp-content/uploads/sites/91/2018/01/product04-1.jpg",
    ],
    rating: {
      count: "943468-1",
    },
    quantity: 1,
  },
  {
    id: 6,
    title: "Horwood Cap",
    price: 39.99,
    description:
      "Dynamically enable functional sources through distributed services. Proactively restore cross-platform platforms after functionalized technologies",
    images: [
      "https://demo.kallyas.net/minimal-store/wp-content/uploads/sites/91/2018/01/product05-1.jpg",
      "https://demo.kallyas.net/minimal-store/wp-content/uploads/sites/91/2018/01/product05c-1-768x768.jpg",
      "https://demo.kallyas.net/minimal-store/wp-content/uploads/sites/91/2018/01/product05b-1-768x768.jpg",
    ],
    rating: {
      count: 943462,
    },
    quantity: 1,
  },
  {
    id: 7,
    title: "Leather Wallet",
    price: 49.99,
    description:
      "Dynamically enable functional sources through distributed services. Proactively restore cross-platform platforms after functionalized technologies",
    images: [
      "https://demo.kallyas.net/minimal-store/wp-content/uploads/sites/91/2018/01/product06b-1.jpg",
      "https://demo.kallyas.net/minimal-store/wp-content/uploads/sites/91/2018/01/product06c-1-768x768.jpg",
    ],
    rating: {
      count: 943447,
    },
    quantity: 1,
  },
  {
    id: 8,
    title: "Odell Messenger",
    price: 129.99,
    description:
      "Dynamically enable functional sources through distributed services. Proactively restore cross-platform platforms after functionalized technologies",
    images: [
      "https://demo.kallyas.net/minimal-store/wp-content/uploads/sites/91/2018/01/product03-1.jpg",
      "https://demo.kallyas.net/minimal-store/wp-content/uploads/sites/91/2018/01/product03b-1-768x768.jpg",
      "https://demo.kallyas.net/minimal-store/wp-content/uploads/sites/91/2018/01/product03c-1-768x768.jpg",
    ],
    rating: {
      count: 943468,
    },
    quantity: 1,
  },
  {
    id: 9,
    title: "Woven Backpack",
    price: 119.99,
    description:
      "Dynamically enable functional sources through distributed services. Proactively restore cross-platform platforms after functionalized technologies",
    images: [
      "https://demo.kallyas.net/minimal-store/wp-content/uploads/sites/91/2018/01/product02-1.jpg",
      "https://demo.kallyas.net/minimal-store/wp-content/uploads/sites/91/2018/01/product02b-1-768x768.jpg",
      "https://demo.kallyas.net/minimal-store/wp-content/uploads/sites/91/2018/01/product02c-1-768x768.jpg",
    ],
    rating: {
      count: 943465,
    },
    quantity: 1,
  },
];

let allSlider = document.querySelectorAll(".slider-items");
let sliderNext = document.querySelector(".slider-next");
let sliderPrev = document.querySelector(".slider-prev");
let counterImage = 0;
// next images
function nextSlider() {
  counterImage === allSlider.length - 1 ? (counterImage = 0) : counterImage++;
  removeToggleClass();
  movingFade();
}
sliderNext.onclick = nextSlider;

// prev images
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

// show 6 only products
for (let i = 0; i < store.length - 3; i++) {
  const { id, images, title, price } = store[i];
  let html = "";
  html = `
  <div class="col-lg-3">
  <div class="shop-items">
  <img src="${images[0]}"alt="shop" />
  <img src="${images[1]}" alt="shop" class="img-hover" />
  <div class="d-flex flex-column shop-details text-center py-3">
  <h3 class="mb-2">${title}</h3>
  <span class="woocommerce-price-amount">
  <span class="woocommerce-currencySymbol">£</span>${price}</span>
  <div class="kw-actions">
  <button class="btn btn-primary link-actions" onclick=savedProduct(${id},this)><span class="loader"></span> add to cart</button>
  <a href="details.html?id=${id}" class="link-actions style-1">more info</a>
  </div>
  </div>
  </div>
  </div>
  `;
  document.querySelector(".latest .responsive").innerHTML += html;
}