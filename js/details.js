// all products
const store = [
  {
    id: 1,
    title: "Aster Backpack",
    categories: ["Backpacks", "Bags", "Messengers"],
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
    categories: ["Backpacks", "Bags", "Messengers"],
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
    categories: ["Backpacks", "Bags", "Messengers"],
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
    categories: ["Backpacks", "Bags", "Messengers"],
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
    categories: ["Backpacks", "Bags", "Messengers"],
    price: 29.99,
    description:
        "Dynamically enable functional sources through distributed services. Proactively restore cross-platform platforms after functionalized technologies",
    images: [
      "https://demo.kallyas.net/minimal-store/wp-content/uploads/sites/91/2018/01/product04-1.jpg"
    ],
    rating: {
      count: "943468-1",
    },
    quantity: 1,
  },
  {
    id: 6,
    title: "Horwood Cap",
    categories: ["Backpacks", "Bags", "Messengers"],
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
    categories: ["Backpacks", "Bags", "Messengers"],
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
    categories: ["Backpacks", "Bags", "Messengers"],
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
    categories: ["Backpacks", "Bags", "Messengers"],
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

function showDetailsProducts() {
  let openDetails = new URLSearchParams(location.search).get("id");
  let getId = store.find((el) => el.id === +openDetails);
  const {images, title, price, description, rating, categories} = getId;
  let html = "";
  html = `
  <div class="col-md-8 d-flex flex-md-row flex-column-reverse">
  <ul class="d-md-block d-flex list-images">
  <li><img src="${images[0]}"
  class="active" alt="Not found"></li>
  <li><img src="${images[1]}"
  alt="Not found" onerror="this.remove()"></li>
  <li><img src="${images[2]}"
  alt="Not found" onerror="this.remove()"></li>

  </ul>
  <div class="position-relative">
  <img src="${images[0]}"
  class="img-fluid" style="height: 100%; object-fit: cover" alt="Not found">
  <i class="fa-solid fa-magnifying-glass"></i>
  </div>
  <div class="overlay-slider">
  <div class="top-bar d-flex justify-content-between">
  <span>1 / 2</span>
  <ul class="d-flex align-items-center">
  <li class="zoom"></li>
  <li class="full-screen"></li>
  <li class="close"></li>
  </ul>
  </div>
  <div class="image-center">
  <img src="${images[0]}"
  class="img-fluid active" id="1 / 2" alt="${title} 01">
  <img src="${images[1]}"
  class="img-fluid" id="2 / 2" alt="${title} 02">
  </div>
  <div class="top-bar bottom text-center">
  <p>${title} 01</p>
  </div>
  <div class="prev"></div>
  <div class="next"></div>
  </div>
  </div>

  <div class="col-md-4 ps-3">
  <div class="details-items">
  <h2>${title}</h2>
  <h3>£${price}</h3>
  <p class="main-style">${description}</p>
  </div>
  <form action="#">
  <input type="number" size="4" min="1">
  <button class="btn btn-primary">Add to cart</button>
  </form>
  <div class="details-footer">
  <p class="mb-3">SKU: ${rating.count}</p>
  <p>categories
  <span>
  <a href="#">${categories[0]}</a>,
  <a href="#">${categories[1]}</a>,
  <a href="#">${categories[2]}</a>
  </span>
  </p>
  </div>
  </div>
`;
  document.querySelector(".details .responsive").innerHTML = html;
}

showDetailsProducts();

let openSlider = document.querySelector(".details .fa-magnifying-glass");
let closeSlider = document.querySelector(".details .close");
let allImageCenter = document.querySelectorAll(".image-center img");
let overlaySlider = document.querySelector(".overlay-slider");
let overlaySliderImage = document.querySelector(".overlay-slider img");
let bottomCaption = document.querySelector(".bottom p");
let zoom = document.querySelector(".zoom");
let fullScreen = document.querySelector(".full-screen");
let next = document.querySelector(".next");
let prev = document.querySelector(".prev");
let count = document.querySelector(".top-bar span");
let counterImage = 0;

openSlider.onclick = () => overlaySlider.classList.add("active");
closeSlider.onclick = () => overlaySlider.classList.remove("active");

let listImages = document.querySelectorAll(".list-images img");
listImages.forEach((el) => {
  el.onclick = function () {
    listImages.forEach((el) => el.classList.remove("active"));
    this.classList.add("active");
    this.parentElement.parentElement.nextElementSibling.children[0].src =
        this.src;
  };
});

function nextImages() {
  counterImage === allImageCenter.length - 1
      ? (counterImage = 0)
      : counterImage++;
  allImageCenter.forEach((el) => el.classList.remove("active"));
  toggleSlider();
  bottomCaption.textContent = allImageCenter[counterImage].alt;
}

next.onclick = nextImages;

function prevImages() {
  counterImage === 0
      ? (counterImage = allImageCenter.length - 1)
      : counterImage--;
  allImageCenter.forEach((el) => el.classList.remove("active"));
  toggleSlider();
  bottomCaption.textContent = allImageCenter[counterImage].alt;
}

prev.onclick = prevImages;

function toggleSlider() {
  allImageCenter[counterImage].classList.add("active");
  allImageCenter[counterImage].classList.remove("zoom");
  count.innerHTML = allImageCenter[counterImage].name;
}

window.onkeydown = function (e) {
  if (e.keyCode === 39 || e.key === "ArrowRight") nextImages();
  if (e.keyCode === 37 || e.key === "ArrowLeft") prevImages();
  if (e.keyCode === 27 || e.key === "Escape")
    overlaySlider.classList.remove("active");
};

zoom.onclick = function () {
  allImageCenter.forEach((el) => el.classList.toggle("zoom"));
};

allImageCenter.forEach((el) => {
  el.onclick = function () {
    this.classList.toggle("zoom");
  };
});

fullScreen.onclick = function () {
  this.classList.toggle("full");
  if (this.classList.contains("full")) {
    if (overlaySlider.requestFullscreen) {
      overlaySlider.requestFullscreen();
    } else if (overlaySlider.webkitRequestFullscreen) {
      overlaySlider.webkitRequestFullscreen();
    } else if (overlaySlider.mozRequestFullScreen) {
      overlaySlider.mozRequestFullScreen();
    } else if (overlaySlider.msRequestFullscreen) {
      overlaySlider.msRequestFullscreen();
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  }
};

let listFooter = document.querySelectorAll(".list-footer li a");
let allTab = document.querySelectorAll(".tab");
listFooter.forEach((el) => {
  el.onclick = function (e) {
    e.preventDefault();
    listFooter.forEach((el) => el.classList.remove("active"));
    this.classList.add("active");
    allTab.forEach((el) => el.classList.remove("active"));
    document.querySelector("#" + e.target.dataset.tab).classList.add("active");
  };
});


let openDetails = new URLSearchParams(location.search).get("id");
let filterId = store.filter(el => el.id !== +openDetails);
for (let i = 0; i < filterId.length - 4; i++) {
  const {id, images, title, price} = filterId[i];
  let html = "";
  html = `
  <div class="col-md-3 col-sm-6 col-12">
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
  document.querySelector(".latest-products").innerHTML += html;
}