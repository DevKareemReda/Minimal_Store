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

function showProducts() {
  let productStorage = JSON.parse(localStorage.getItem("saved")) || [];
  let html = "";
  productStorage.map((el) => {
    const { id, images, title, price, quantity } = el;
    html += `
      <tr>
				<td data-title="product"
				class="table-products d-flex justify-content-between align-items-center">
				<span class="close" onclick="closeProducts(${id},parentElement.parentElement)">&times;</span>
				<div class="product-thumbnails">
				<img src="${images[0]}"
        loading="lazy"
				alt="Not Foudn">
				<img src="${images[1]}"
        loading="lazy"
				alt="Not Foudn">
				</div>
				<a href="details.html?id=${id}" class="float-end">${title}</a>
				</td>
				<td data-title="price">
				<span class="woocommerce-price-amount float-end">
				<span class="woocommerce-currencySymbol">£</span>${price}
				</span>
				</td>
				<td data-title="quantity">
				<form action="#" class="float-end">
				<input type="number" size="4" min="1" value=${quantity} oninput="changeNums(${id},this,${price})" />
				</form>
				</td>
				<td data-title="subtotal" class="update">
				<span class="woocommerce-price-amount amount float-end">£${(
          price * quantity
        ).toFixed(2)}</span>
				</td>
				</tr>
      `;
    });
    document.querySelector("table tbody").innerHTML = html;
}
showProducts();

function changeNums(id, e, price) {
  let productStorage = JSON.parse(localStorage.getItem("saved")) || [];
  let getId = store.find((el) => el.id === id);
  let loopProducts = productStorage.find((el) => el.id === getId.id);
  if (loopProducts) {
    loopProducts.quantity = +e.value;
  } else {
    productStorage.push(loopProducts);
  }
  e.parentElement.parentElement.nextElementSibling.children[0].textContent =
    "£" + (e.value * price).toFixed(2);
  calcTotalPrice(productStorage);
  localStorage.setItem("saved", JSON.stringify(productStorage));
  showProducts();
}

// function calcTotalPrice(productStorage) {
//   let allInp = document.querySelectorAll("input[type='number']");
//   let totalPrice = 0;
//   allInp.forEach((el) => {
//     totalPrice += +el.value;
//   });
//   let html = "";
//   productStorage.map((el) => {
//     html = `
//     <div class="col-lg-5 mb-5 mb-lg-0">
//     <div class="coupon">
//     <input type="text" name="coupon" placeholder="Coupon code">
//     <button class="btn btn-light">apply coupon</button>
//     </div>
//     </div>
//     <div class="col-lg-6">
//     <div class="cart-total">
//     <h2 class="main-head">CART TOTALS</h2>
//     <table>
//     <tr class="carts-sutotal">
//     <th>SUBTOTAL</th>
//     <td>
//     <span class="woocommerce-price-amount">
//     <span class="woocommerce-currencySymbol">£</span>0
//     </span>
//     </td>
//     </tr>
//     <tr class="order-total">
//     <th>TOTAL</th>
//     <td>
//     <span class="woocommerce-price-amount">
//     <span class="woocommerce-currencySymbol">£</span>${totalPrice * el.price}
//     </span>
//     </td>
//     </tr>
//     </table>
//     <div class="proceed-checkout">
//     <a href="https://demo.kallyas.net/minimal-store/checkout/" class="btn btn-primary">
//     Proceed to checkout</a>
//     </div>
//     </div>
//     </div>
//     `;
//     document.querySelector(".total-price").innerHTML = html;
//   });
// }
