// all products
const store = [
  {
    id: 1,
    title: "Aster Backpack",
    categories: ["Backpacks", "Bags", "Messengers"],
    color: ["Black", "Blue", "Grey"],
    price: 69.99,
    description: [
      "The exterior of the Aster Backpack is crafted from high-quality, durable material, possibly a smooth nylon or a textured canvas, in a classic color like black or navy blue.",
      "This ensures the bag is both water-resistant and easy to clean. The zippers and hardware are sleek and robust, adding to its overall durability.For comfort, the Aster Backpack is equipped with padded shoulder straps that are adjustable, allowing for a customized fit. There's also a padded back panel, providing additional comfort and support when carrying heavier loads.",
      "At the top, a sturdy handle allows for easy carrying when not worn on the back. The main compartment, accessed by a smooth, dual zipper closure, offers generous storage capacity suitable for daily essentials and more. Inside, a padded sleeve provides protection for a laptop, secured with a hook-and-loop strap for added safety during transit.",
    ],

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
    color: ["Black", "Blue", "Grey"],
    price: 148.99,
    description: [
      "A blue bag typically conjures an image of a versatile and practical accessory. Imagine a medium-sized bag, rectangular in shape, crafted from a durable blue canvas material.",
      " It has a sturdy zipper running along its top,ensuring the contents remain secure. The shade of blue is deep and calming, reminiscent of a clear summer sky. On the front, there might be a small pocket with a velcro closure, handy for storing small items like keys or a phone. The bag features comfortable straps that allow it to be carried over the shoulder or by hand. Inside, it's lined with a soft, contrasting fabric, perhaps in a light grey or white, adding a touch of elegance.",
      "The bag's design is practical yet stylish: a single flap secured with silver clasps conceals its contents, promising security without sacrificing accessibility. Its corners are gently rounded, softened with use yet still retaining their shape. Stitched seams run neatly along its edges, a testament to careful craftsmanship.",
    ],
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
    color: ["Black", "Blue", "Grey"],
    price: 128.99,
    description: [
      "Comfort is prioritized with the Coast Bag, often featuring adjustable shoulder straps that are padded for enhanced support. This makes it comfortable to wear even when carrying heavier loads.",
      "Internally, the Coast Bag is well-organized with multiple compartments and pockets. A main compartment typically offers ample space for everyday items such as a wallet, keys, and a small water bottle. Additional pockets may be dedicated to storing electronics like a smartphone or tablet, ensuring everything has its place.",
      "Coast Bags usually have sturdy handles for carrying by hand and adjustable shoulder straps for comfortable wearing as a backpack or crossbody bag Closure: They may have zippered closures for security, often with durable, weather-resistant zippers.",
    ],
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
    color: ["Black", "Blue", "Grey"],
    price: 49.99,
    description: [
      "Eugene Wallet is a refined and functional accessory designed to organize essentials with elegance and simplicity.",
      "Externally, the Eugene Wallet features a clean and compact design that fits comfortably in the hand or pocket. It often showcases meticulous craftsmanship, with fine stitching and smooth edges contributing to its polished look. Some designs may incorporate embossed logos or discreet branding, adding a subtle touch of sophistication.",
      "The Eugene Wallet is crafted from premium materials such as full-grain leather or durable technical fabrics like ballistic nylon or ultra-high-molecular-weight polyethylene (UHMWPE). These materials ensure durability and a sleek appearance.",
    ],
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
    color: ["Black", "Blue", "Grey"],
    price: 29.99,
    description: [
      "A grey beanie is a cozy and versatile headwear accessory that blends comfort with casual style. Picture a soft, knit fabric in a shade of grey that's neither too light nor too dark, offering a neutral tone that complements a variety of outfits.",
      "Externally, the Eugene Wallet features a clean and compact design that fits comfortably in the hand or pocket. It often showcases meticulous craftsmanship, with fine stitching and smooth edges contributing to its polished look. Some designs may incorporate embossed logos or discreet branding, adding a subtle touch of sophistication.",
      "The term grey encompasses various shades, from light heather grey to dark charcoal grey. The exact shade can vary depending on the manufacturer and style, offering options that can match different outfits and personal preferences.",
    ],
    images: [
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
    categories: ["Backpacks", "Bags", "Messengers"],
    color: ["Black", "Blue", "Grey"],
    price: 39.99,
    description: [
      "Many Horwood caps come with an adjustable suspension system (usually internal) to ensure a snug and comfortable fit for different head sizes.",
      "Ventilation: Some caps include ventilation holes or slots to improve airflow and comfort during prolonged wearChin Strap: Often equipped with a chin strap or harness to secure the cap in place, especially in environments where there is a risk of it being dislodged Primarily designed to protect the wearer's head from impacts.",
      "Historically, caps like the Horwood Cap were part of the academic regalia worn by scholars and students in European universities. They have evolved over time into symbolic attire worn during graduation ceremonies and other academic events.",
    ],
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
    color: ["Black", "Blue", "Grey"],
    price: 49.99,
    description: [
      "A leather wallet is a classic accessory that combines functionality with style. Typically small and compact, it is designed to hold essentials such as cash, cards, and sometimes coins.",
      "From a design perspective, leather wallets come in various styles ranging from minimalist bi-folds to more intricate tri-folds, each offering different compartments and organizational features. Some may have embossed patterns, stitching details, or metal accents, adding a touch of personalization or luxury.",
      "In summary, a leather wallet is not just a practical item for storing money and cards; it's also a statement of personal style and craftsmanship, making it a timeless accessory that can be passed down through generations.",
    ],
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
    color: ["Black", "Blue", "Grey"],
    price: 129.99,
    description: [
      "The Odell Messenger bag blends practical functionality with contemporary style, making it a versatile accessory for both professional and casual settings.",
      "From a structural standpoint, the Odell Messenger bag features a single shoulder strap that can be adjusted for comfort, allowing it to be worn across the body or over the shoulder. This design distributes weight evenly, making it convenient for commuting or traveling.",
      "Stylistically, the bag often boasts a clean and modern aesthetic, with minimalist designs or subtle accents such as leather trims, metal hardware, or embossed logos. This makes it suitable for professional environments while still maintaining a casual appeal that fits into everyday life.",
    ],
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
    color: ["Black", "Blue", "Grey"],
    price: 119.99,
    description: [
      "A woven backpack bag exudes a distinctive charm with its intricate craftsmanship and practical design. Typically made from materials such as woven straw, rattan.",
      "Structurally, the woven backpack is lightweight and flexible, making it comfortable to carry for extended periods. It often features adjustable shoulder straps that ensure a customizable fit, allowing you to wear it comfortably whether you're hiking, shopping, or exploring new places.",
      "Stylistically, the woven backpack embodies a relaxed and carefree vibe, making it a popular choice for outdoor activities, vacations, or simply adding a bohemian touch to your wardrobe. Its natural materials and craftsmanship also contribute to its eco-friendly appeal, appealing to those conscious of sustainable fashion choices.",
    ],
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

function imageDetails() {
  let openDetails = new URLSearchParams(location.search).get("id");
  let getId = store.find((el) => el.id === +openDetails);
  const { images, title } = getId;
  document.title = title + " - " + document.title;

  let html = "";
  for (let i = 0; i < images.length; i++) {
    html += `
    <li>
      <img src="${images[i]}" id="${i + 1} / ${
      images.length
    }" class="" alt="${title} ${
      images.length < 2 ? "" : "0" + (i + 1)
    }" data-index="${i + 1}" loading="lazy">
    </li>`;
  }

  html = `
  <ul class="d-md-block d-flex list-images">
  ${html}
  </ul>
  <div class="position-relative">
  <img src="${images[0]}"
  class="img-fluid big-img" style="height: 100%; object-fit: cover" loading="lazy">
  <i class="fa-solid fa-magnifying-glass"></i>
  </div>
  <div class="overlay-slider">
  <div class="top-bar d-flex justify-content-between">
  <span>1 / 3</span>
  <ul class="d-flex align-items-center">
  <li class="zoom-in"></li>
  <li class="full-screen"></li>

  <li class="close"></li>
  </ul>
  </div>
  <div class="image-center">
  <img src="${images[0]}"
  class="img-fluid loading="lazy">
  </div>
  <div class="top-bar bottom text-center">
  <p>${title} 01</p>
  </div>
  <div class="prev"></div>
  <div class="next"></div>
  </div>
  </div>
  </div>
  `;
  document.querySelector(".details .details-images").innerHTML = html;

  let allListImages = document.querySelectorAll(".list-images li img");
  let next = document.querySelector(".next");
  let prev = document.querySelector(".prev");
  if (images.length === 1) {
    allListImages[0].style.display = "none";
    next.style.display = "none";
    prev.style.display = "none";
  }
}
imageDetails();

function detailsFooter() {
  let openDetails = new URLSearchParams(location.search).get("id");
  let getId = store.find((el) => el.id === +openDetails);
  const { description, color } = getId;
  let html = "";
  html = `
  <ul class="d-flex list-footer justify-content-center mb-3">
  <li><a href="#" data-tab="one" class="active">Description</a></li>
  <li><a href="#" data-tab="two">Additional information</a></li>
  </ul>
  <div class="tab active" id="one">
  <p class="mb-3">${description[1]}</p>
  <p>${description[2]}</p>
  </div>
  <table class="tab" id="two">
  <tr>
  <th>Color</th>
  <td>${color}</td>
  </tr>
  </table>
  `;
  document.querySelector(".details-parent").innerHTML = html;
}
detailsFooter();

function productsDetails() {
  let openDetails = new URLSearchParams(location.search).get("id");
  let getId = store.find((el) => el.id === +openDetails);
  const { id, title, quantity, price, description, rating, categories } = getId;
  let productStorage = JSON.parse(localStorage.getItem("saved")) || [];
  let filterCount = productStorage.find((el) => el.id === +openDetails);
  filterCount
    ? (addedQuantity = filterCount.quantity)
    : (addedQuantity = quantity - 1);

  let html = "";
  html = `
  <div class="details-items">
  <h2>${title}</h2>
  <h3>£${price}</h3>
  <p class="main-style">${description[0]}</p>
  </div>
  <input type="number" size="4" min="0" value=${addedQuantity} oninput="changeNums(${id},this,${price})" >
  <button class="btn btn-primary" onclick=savedProduct(${id},this)><span></span>Add to cart</button>
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
  `;
  document.querySelector(".details .details-products").innerHTML = html;
}
productsDetails();

function changeNums(id, e) {
  let productStorage = JSON.parse(localStorage.getItem("saved")) || [];
  let getId = store.find((el) => el.id === id);
  let loopProducts = productStorage.find((el) => el.id === getId.id);

  if (loopProducts) {
    loopProducts.quantity = +e.value;
  } else {
    productStorage.push(getId);
  }

  localStorage.setItem("saved", JSON.stringify(productStorage));
  calcQuantityToClose();
  showProducts(productStorage);
}

function calcQuantityToClose() {
  let productStorage = JSON.parse(localStorage.getItem("saved")) || [];
  productStorage.filter((el, r) => {
    if (el.quantity < 1) productStorage.splice(r, 1);
  });
  if (productStorage.length == 0)
    document.querySelector(".topnav-drop").classList.remove("active");
  localStorage.setItem("saved", JSON.stringify(productStorage));
  showProducts(productStorage);
}

let allListImages = document.querySelectorAll(".list-images li img");
let imgCenter = document.querySelector(".image-center img");
let bigImg = document.querySelector(".big-img");
let caption = document.querySelector(".bottom p");
let counter = document.querySelector(".top-bar span");
let next = document.querySelector(".next");
let prev = document.querySelector(".prev");
let counterImages = 0;

// change src, alt and count image
allListImages.forEach((el) => {
  allListImages[0].classList.add("active");
  el.onclick = function () {
    allListImages.forEach((el) => el.classList.remove("active"));
    el.classList.add("active");
    bigImg.src = this.src;
    bigImg.alt = this.alt;
    bigImg.id = this.id;
    counterImages = el.getAttribute("data-index") - 1;
  };
});

// open modal
let openModal = document.querySelector(".details .fa-magnifying-glass");
let closeModal = document.querySelector(".close");
let overlaySlider = document.querySelector(".overlay-slider");
openModal.onclick = function () {
  overlaySlider.classList.add("active");
  imgCenter.src = bigImg.src;
  caption.innerHTML = allListImages[counterImages].alt;
  counter.innerHTML = allListImages[counterImages].id;
};

// next images
function nextImages() {
  counterImages === allListImages.length - 1
    ? (counterImages = 0)
    : counterImages++;
  toggleSlider();
}
next.onclick = nextImages;

// previous images
function prevImages() {
  counterImages === 0
    ? (counterImages = allListImages.length - 1)
    : counterImages--;
  toggleSlider();
}
prev.onclick = prevImages;

function toggleSlider() {
  caption.innerHTML = allListImages[counterImages].alt;
  counter.innerHTML = allListImages[counterImages].id;
  bigImg.src = allListImages[counterImages].src;
  imgCenter.src = bigImg.src;
  allListImages.forEach((el) => el.classList.remove("active"));
  allListImages[counterImages].classList.add("active");
}

// zoomIn and zoomOut
let zoomIn = document.querySelector(".zoom-in");
zoomIn.onclick = () => zoomInOut();
imgCenter.onclick = () => zoomInOut();

function zoomInOut() {
  imgCenter.classList.toggle("zoom");
  imgCenter.classList.contains("zoom")
    ? zoomIn.classList.add("zoom-out")
    : zoomIn.classList.remove("zoom-out");
}

// full screen slider
let fullScreen = document.querySelector(".full-screen");
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

// Control KeyBoard buttons
function effectKeyBoard(e) {
  if (e.key === "ArrowRight" || e.keyCode === 39) nextImages();
  if (e.key === "ArrowLeft" || e.keyCode === 37) prevImages();
  if (e.keyCode === 27 || e.key === "Escape")
    overlaySlider.classList.remove("active");
}
window.onkeyup = effectKeyBoard;

// close modal
closeModal.onclick = () => overlaySlider.classList.remove("active");

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
let filterId = store.filter((el) => el.id !== +openDetails);
for (let i = 0; i < filterId.length - 4; i++) {
  const { id, images, title, price } = filterId[i];
  let html = "";
  for (let i = 0; i < images.length; i++) {
    html += `<img src="${images[i]}" loading="lazy" alt="shop" />`;
  }
  html = `
  <div class="col-md-3 col-sm-6 col-12">
  <div class="shop-items">
  ${html}
  <div class="d-flex flex-column shop-details text-center py-3">
  <a href="details.html?id=${id}"><h3 class="mb-2">${title}</h3></a>
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
  let shopSlider = document.querySelectorAll(".shop-items");
  shopSlider.forEach((el) => {
    if (el.children[2]) el.childNodes[2].classList.add("img-hover");
    if (el.children[3]) el.childNodes[3].remove();
  });
}
