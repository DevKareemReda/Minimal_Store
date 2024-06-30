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

let getTable = document.querySelector("table tbody");
function showCartsProducts() {
  let productStorage = JSON.parse(localStorage.getItem("saved")) || [];
  let html = "";
  if (productStorage) {
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
      alt="Not found">
      <img src="${images[1]}"
      onerror="this.remove()"
      loading="lazy"
      alt="Not found" class="un">
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
      <input type="number" size="4" min="0" value=${quantity} oninput="changeNums(${id},this,${price})" />
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
    calcSubTotalPrice(productStorage);
    if (getTable.innerHTML === "") removeEmpty();
  }
}
showCartsProducts();

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
  localStorage.setItem("saved", JSON.stringify(productStorage));
  showProducts(productStorage);
  calcSubTotalPrice(productStorage);
  calcQuantityToClose(e);
  if (productStorage.length == 0) removeEmpty();
}

function removeEmpty() {
  let checkCarts = document.querySelector(".check-carts");
  document
    .querySelectorAll(".remove-product")
    .forEach((el) => (el.style.display = "none"));
  getTable.parentElement.style.display = "none";
  checkCarts.style.display = "block";
}

function calcQuantityToClose(e) {
  let productStorage = JSON.parse(localStorage.getItem("saved")) || [];
  productStorage.filter((el, ind) => {
    if (el.quantity < 1) {
      productStorage.splice(ind, 1);
      e.parentElement.parentElement.parentElement.remove()
    }
  });
  if (productStorage.length == 0) {
    removeEmpty()
    document.querySelector(".topnav-drop").classList.remove("active");
  }

  localStorage.setItem("saved", JSON.stringify(productStorage));
  showProducts(productStorage);
}

function calcSubTotalPrice(productStorage) {
  let cartTotal = document.querySelectorAll(".cart-total .total");
  let totalPrice = 0;
  productStorage.map((el) => (totalPrice += el.price * el.quantity));
  cartTotal.forEach((el) => (el.innerHTML = "£" + totalPrice.toFixed(2)));
}

let formTwo = document.querySelector(".form-2");
let couponInp = document.getElementById("coupon");
let coupon = document.querySelector(".coupon");
let loader = document.querySelector(".loader");
formTwo.addEventListener("submit", function (e) {
  e.preventDefault();
  if (!validCoupon()) {
    loader.style.display = "block";
    setTimeout(function () {
      loader.style.display = "none";
    }, 2000);
    loader.parentElement.style.opacity = ".5";
    setTimeout(() => {
      loader.parentElement.style.opacity = "1";
      coupon.innerHTML = `<ul class="woocommerce-error">
        <li>Coupon "${couponInp.value}" does not exist!</li>
      </ul>`;

      coupon.style.display = "block";
    }, 2001);
  }
  validCoupon();
});

function validCoupon() {
  if (couponInp.value === "") {
    loader.style.display = "block";
    loader.parentElement.style.opacity = ".5";
    setTimeout(function () {
      loader.style.display = "none";
      loader.parentElement.style.opacity = "1";
    }, 2000);
    setTimeout(() => {
      scrollTo({
        top: 10,
        behavior: "smooth",
      });
      coupon.innerHTML = `
      <ul class="woocommerce-error">
        <li>Please enter a coupon code.</li>
      </ul>`;
      coupon.style.display = "block";
    }, 2001);
  }
}
