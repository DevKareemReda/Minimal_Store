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

let products = document.querySelector(".responsive");

store.map(el => {
  const {id, images, title, price} = el;
  let html = "";
  html = `
    <div class="col-lg-4 col-md-6">
      <div class="shop-items">
        <img
          src="${images[0]}"
          alt="shop"
        />
        <img
          src="${images[1]}"
          alt="shop"
          class="img-hover"
        />
        <div class="d-flex flex-column shop-details text-center py-3">
          <h3 class="mb-2">${title}</h3>
          <span class="woocommerce-price-amount">
            <span class="woocommerce-currencySymbol">£</span>${price}
          </span>
          <div class="kw-actions">
            <button class="btn btn-primary link-actions" onclick=savedProduct(${id},this)><span class="loader"></span> add to cart</button>
            <a href="#" class="link-actions style-1">more info</a>
          </div>
        </div>
      </div>
    </div>
  `;
  products.innerHTML += html;
})


// for (let i = 0; i < store.length; i++) {
//   const {id, images, title, price} = store;
//   let html = "";
//   html = `
//     <div class="col-lg-3">
//       <div class="shop-items">
//         <img
//           src="${images[0]}"
//           alt="shop"
//         />
//         <img
//           src="${images[1]}"
//           alt="shop"
//           class="img-hover"
//         />
//         <div class="d-flex flex-column shop-details text-center py-3">
//           <h3 class="mb-2">${title}</h3>
//           <span class="woocommerce-price-amount">
//             <span class="woocommerce-currencySymbol">£</span>${price}
//           </span>
//           <div class="kw-actions">
//             <button class="btn btn-primary link-actions" onclick=savedProduct(${id},this)><span class="loader"></span> add to cart</button>
//             <a href="#" class="link-actions style-1">more info</a>
//           </div>
//         </div>
//       </div>
//     </div>
//   `;
//   products.innerHTML += html;
// }

let price = document.querySelector(".woocommerce-price-amount");
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
