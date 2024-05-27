// open navbar
let triggerBar = document.querySelector(".trigger-bar");
let mobileSite = document.querySelector(".mobile-site");
triggerBar.onclick = function () {
  this.classList.toggle("active");
  this.previousElementSibling.classList.add("active");
};

// close navbar
let closeNav = document.querySelector(".close-nav");
closeNav.onclick = function () {
  this.parentElement.parentElement.classList.remove("active");
  triggerBar.classList.remove("active");
};

// close navbar when click on key 'escape'
window.onkeydown = function (e) {
  if (e.key === "Escape" || e.keyCode === 27) {
    closeNav.parentElement.parentElement.classList.remove("active");
    triggerBar.classList.remove("active");
  }
};

// show shopping carts
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

// counter products
let shopping = document.querySelector(".shopping > span");
shopping.onclick = function () {
  if (this.getAttribute("data-count") == 0) {
    alert("No products Choosen")
  } else {
    this.previousElementSibling.classList.toggle("active");
  }
};

// auto scroll top when click on icons
let goUp = document.querySelector(".fa-angle-up");
goUp.onclick = function () {
  scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

// show all products
// let addPrice = document.querySelector(".woocommerce-price-amount");
let topDrop = document.querySelector(".topnav-drop");
let shoppingCommerce = document.querySelector(".shopping .woocommerce");
function savedProduct(id, same) {
  let productStorage = JSON.parse(localStorage.getItem("saved")) || [];
  let filterProducts = store.find((el) => el.id === id);
  let loopProducts = productStorage.find((el) => el.id === filterProducts.id);
  loopProducts
    ? (loopProducts.quantity += 1)
    : productStorage.push(filterProducts);

  let html = "";
  productStorage.map((el) => {
    const { id, images, title, price, quantity } = el;
    html += `
      <li class="d-flex">
        <a href="#">
          <img src="${images[0]}" alt="not found">
        </a>
        <div class="d-flex flex-column">
          <a href="#">${title}</a>
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
    shoppingCommerce.innerHTML = html;
    calcTotalPrice(productStorage);
    calcTotalQuantity(productStorage);
  }, 1500);
}

// show products from storage
function showProducts() {
  let productStorage = JSON.parse(localStorage.getItem("saved")) || [];
  if (productStorage) {
    let html = "";
    productStorage.map((el) => {
      const { id, images, title, price, quantity } = el;
      html += `
      <li class="d-flex">
        <a href="#">
          <img src="${images[0]}" alt="not found">
        </a>
        <div class="d-flex flex-column">
          <a href="#">${title}</a>
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
    document.querySelector(".shopping .woocommerce").innerHTML = html;
    calcTotalPrice(productStorage);
    calcTotalQuantity(productStorage);
  }
}
showProducts();

// price products
function calcTotalPrice(productStorage) {
  let totalPrice = 0;
  productStorage.map((el) => {
    const { quantity, price } = el;
    productStorage.quantity = 1;
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
    if (removeItems.length < 1)
      parent.parentElement.parentElement.classList.remove("active");
    showProducts(removeItems);
  }, 700);
}