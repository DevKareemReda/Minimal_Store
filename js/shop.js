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
      rate: 4,
      count: 943467,
    },
    date: Date.now(),
    quantity: 1,
    date: new Date("2023-11-1"),
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
      rate: 4.2,
      count: 943434,
    },
    date: Date.now(),
    quantity: 1,
    date: new Date("2024-01-1"),
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
      rate: 3,
      count: 943435,
    },
    date: Date.now(),
    quantity: 1,
    date: new Date("2023-01-1"),
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
      rate: 5,
      count: 943448,
    },
    date: Date.now(),
    quantity: 1,
    date: new Date("2024-01-2"),
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
      rate: 4.3,
      count: "943468-1",
    },
    date: Date.now(),
    quantity: 1,
    date: new Date("2023-01-2"),
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
      rate: 2.2,
      count: 943462,
    },
    date: Date.now(),
    quantity: 1,
    date: new Date("2023-01-10"),
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
      rate: 1,
      count: 943447,
    },
    date: new Date("2023-01-14"),
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
      rate: 3,
      count: 943468,
    },
    date: new Date("2023-01-12"),
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
      rate: 4,
      count: 943465,
    },
    date: new Date("2023-01-15"),
    quantity: 1,
  },
];

function filterProducts(el) {
  const { id, images, title, price } = el;
  let html = "";
  for (let i = 0; i < images.length; i++) {
    html += `  <img src="${images[i]}" loading="lazy" alt="shop" />`;
  }
  html = `
  <div class="col-lg-4 col-sm-6 filter-products">
  <div class="shop-items">
  ${html}
  <div class="d-flex flex-column shop-details text-center py-3">
  <a href="details.html?id=${id}"><h3 class="mb-2">${title}</h3></a>
  <span class="woocommerce-price-amount">
  <span class="woocommerce-currencySymbol">£</span>${price}
  </span>
  <div class="kw-actions">
  <button class="btn btn-primary link-actions" onclick=savedProduct(${id},this)><span class="loader"></span> add to cart</button>
  <a href="details.html?id=${id}" class="link-actions style-1">more info</a>
  </div>
  </div>
  </div>
  </div>
  `;
  products.innerHTML += html;
  let shopSlider = document.querySelectorAll(".shop-items");
  shopSlider.forEach((el) => {
    if (el.children[1]) el.children[1].classList.add("img-hover");
    if (el.children[3]) el.childNodes[5].remove();
  });
}

// show all products
let products = document.querySelector(".responsive");
store.map((el) => filterProducts(el));

let filterSelect = document.querySelector(".orderby");
filterSelect.onchange = function () {
  let shopItems = document.querySelectorAll(".filter-products");
  shopItems.forEach((el) => el.remove());
  if (this.value === "sorting") {
    let sorting = store.sort((a, b) => a.id - b.id);
    sorting.map((el) => filterProducts(el));
  } else if (this.value === "popularity") {
    store.sort((a, b) => b.rating.rate - a.rating.rate);
    store.map((el) => filterProducts(el));
  } else if (this.value === "rating") {
    store.sort((a, b) => a.rating.rate - b.rating.rate);
    store.map((el) => filterProducts(el));
  } else if (this.value === "latest") {
    store.sort((a, b) => b.date - a.date);
    store.map((el) => filterProducts(el));
  } else if (this.value === "low") {
    store.sort((a, b) => a.price - b.price);
    store.map((el) => filterProducts(el));
  } else if (this.value === "high") {
    store.sort((a, b) => b.price - a.price);
    store.map((el) => filterProducts(el));
  }
};
