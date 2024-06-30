// preloader
let preloader = document.querySelector(".preloader");

window.onload = () => {
  setTimeout(() => preloader.classList.add("show"), 1500);
};

// open navbar
let triggerBar = document.querySelector(".trigger-bar");
let mobileNav = document.querySelector(".mobile-nav");
triggerBar.onclick = function () {
  this.classList.toggle("active");
  mobileNav.classList.add("active");
};

// close navbar when click on key 'escape'
window.onkeydown = function (e) {
  if (e.key === "Escape" || e.keyCode === 27) removeNavBar();
};

// close navbar when resize
window.onresize = function () {
  if (this.innerWidth >= 992) removeNavBar();
};

function removeNavBar() {
  mobileNav.classList.remove("active");
  triggerBar.classList.remove("active");
}

// close navbar
let closeNav = document.querySelector(".mobile-nav .close-nav");
closeNav.onclick = () => removeNavBar();
// show search shopping carts
let searchParent = document.querySelector(".search-parent > i");
searchParent.onclick = function () {
  this.classList.toggle("active");
  if (this.classList.contains("active")) {
    this.classList.replace("fa-magnifying-glass", "fa-xmark");
    this.nextElementSibling.classList.add("active");
    document.querySelector(".search").style.display = "block";
  } else {
    this.classList.replace("fa-xmark", "fa-magnifying-glass");
    this.nextElementSibling.classList.remove("active");
    document.querySelector(".search").style.display = "none";
  }
};

// show count products
let shopping = document.querySelector(".shopping > span");
shopping.onclick = function () {
  if (this.getAttribute("data-count") == 0) alert("No products Choosen 😞");
  else this.previousElementSibling.classList.toggle("active");
};

// show all products
let topDrop = document.querySelector(".topnav-drop");
let shoppingCommerce = document.querySelector(
  ".shopping .topnav-drop .woocommerce"
);

function savedProduct(id, same) {
  let productStorage = JSON.parse(localStorage.getItem("saved")) || [];
  let filterProducts = store.find((el) => el.id === id);
  let loopProducts = productStorage.find((el) => el.id === filterProducts.id);
  loopProducts
    ? (loopProducts.quantity += 1)
    : productStorage.push(filterProducts);

  let html = "";
  let totalQuantity = 0;
  productStorage.map((el) => {
    const { id, images, title, price, quantity } = el;
    totalQuantity += quantity;
    html += `
    <li class="d-flex">
    <a href="details.html?id=${id}">
    <img src="${images[0]}" loading="lazy" alt="not found">
    </a>
    <div class="d-flex flex-column">
    <a href="details.html?id=${id}">${title}</a>
    <span class="woocommerce-quantity">
    ${quantity} x
    <span class="woocommerce-price-amount">
    <span class="woocommerce-currencySymbol">£</span>${(
      price * quantity
    ).toFixed(2)}
    </span>
    </span>
    </div>
    <span class="close" onclick=closeProducts(${id},parentElement)>×</span>
    </li>
  `;
  });
  localStorage.setItem("saved", JSON.stringify(productStorage));
  same.style.opacity = ".5";
  same.childNodes[0].style.display = "block";
  setTimeout(() => {
    same.style.opacity = "1";
    same.childNodes[0].style.display = "none";
    calcTotalQuantity(productStorage);
    calcTotalPrice(productStorage);

    if (
      location.href.split("/").slice(-1).join("") !== "shop.html" &&
      location.pathname.split("/").slice(-1).join("") !== "shop.html" &&
      location.href.split("/").slice(-1).join("") !== "index.html" &&
      location.pathname.split("/").slice(-1).join("") !== "index.html"
    ) {
      productsDetails(productStorage);
    }
    shoppingCommerce.innerHTML = html;
  }, 1500);
  if (productStorage.length >= 3) {
    shoppingCommerce.style.justifyContent = "normal";
  } else {
    shoppingCommerce.style.justifyContent = "center";
  }
}

// show products from storage
function showProducts() {
  let productStorage = JSON.parse(localStorage.getItem("saved")) || [];
  if (productStorage.length >= 3) {
    shoppingCommerce.style.justifyContent = "normal";
  } else {
    shoppingCommerce.style.justifyContent = "center";
  }
  let html = "";
  let totalQuantity = 0;
  productStorage.map((el) => {
    const { id, images, title, price, quantity } = el;
    totalQuantity += quantity;
    html += `
    <li class="d-flex">
    <a href="details.html?id=${id}">
    <img src="${images[0]}" loading="lazy" alt="not found">
    </a>
    <div class="d-flex flex-column">
    <a href="details.html?id=${id}">${title}</a>
    <span class="woocommerce-quantity">
    ${quantity} x
    <span class="woocommerce-price-amount">
    <span class="woocommerce-currencySymbol">£</span>${(
      price * quantity
    ).toFixed(2)}
    </span>
    </span>
    </div>
    <span class="close" onclick=closeProducts(${id},parentElement)>×</span>
    </li>
    `;
    let getData = document.querySelector(".shopping > span");
    +getData.setAttribute("data-count", totalQuantity);
  });
  calcTotalPrice(productStorage);
  calcTotalQuantity(productStorage);
  document.querySelector(".shopping .woocommerce").innerHTML = html;
}
showProducts();

// price products
function calcTotalPrice(productStorage) {
  let totalPrice = 0;
  productStorage.map((el) => {
    const { quantity, price } = el;
    totalPrice += price * quantity;
  });
  let totalAmount = document.querySelector(".amount");
  totalAmount.innerHTML = `£${totalPrice.toFixed(2)}`;
}

// quantity products
function calcTotalQuantity(productStorage) {
  let totalQuantity = 0;
  productStorage.map((el) => {
    const { quantity } = el;
    productStorage.quantity = 1;
    totalQuantity += quantity;
  });
  let getData = document.querySelector(".shopping > span");
  +getData.setAttribute("data-count", totalQuantity);
}

// remove products from storage
function closeProducts(id, parent) {
  let productStorage = JSON.parse(localStorage.getItem("saved")) || [];
  let removeItems = productStorage.filter((el) => el.id !== id);
  localStorage.setItem("saved", JSON.stringify(removeItems));
  parent.style.opacity = ".5";
  setTimeout(() => {
    if (removeItems.length == 0) {
      document.querySelector(".topnav-drop").classList.remove("active");
    }
    calcTotalQuantity(removeItems);
    calcTotalPrice(removeItems);
    showProducts(removeItems);

    if (
      location.href.split("/").slice(-1).join("") === "carts.html" ||
      (location.pathname.split("/").slice(-1).join("") === "carts.html" &&
        location.href.split("/").slice(-1).join("") === "checkout.html") ||
      location.pathname.split("/").slice(-1).join("") === "checkout.html"
    ) {
      showCartsProducts(removeItems);
    } else if (
      location.href.split("/").slice(-1).join("") === "details.html" ||
      location.pathname.split("/").slice(-1).join("") === "details.html"
    ) {
      productsDetails(removeItems);
    }
    parent.remove();
  }, 1000);
}

// auto scroll top when click on icons
let goUp = document.querySelector(".fa-angle-up");
goUp.onclick = function () {
  scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
