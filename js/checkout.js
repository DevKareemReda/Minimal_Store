let woocommerceLinks = document.querySelectorAll(".woocommerce-info a");
woocommerceLinks.forEach((el) => {
  el.onclick = function (e) {
    e.preventDefault();
    let getElementSibling = this.parentElement.parentElement.nextElementSibling;
    getElementSibling.classList.toggle("active");
  };
});

let formOne = document.querySelector(".form-1");
let user = document.getElementById("user");
let pass = document.getElementById("pass");
let eye = document.querySelectorAll(".fa-eye");
let changeCheck = document.querySelector(".check");

formOne.addEventListener("submit", function (e) {
  e.preventDefault();
  window.scrollTo({
    top: 200,
    behavior: "smooth",
  });
  if (!valid()) {
    changeCheck.innerHTML = `
    <ul class="woocommerce-error">
      <li><strong>ERROR: </strong>  The username or password you entered is incorrect. <a href="#" title="Password Lost and Found">Lost your password?</a></li>
    </ul>`;
    changeCheck.style.display = "block";
  }
  valid();
});

function valid() {
  if (user.value === "") {
    changeCheck.innerHTML = `<ul class="woocommerce-error">
      <li><strong>Error: </strong> Username is required.</li>
    </ul>`;
    changeCheck.style.display = "block";
    return;
  }
  if (pass.value === "") {
    changeCheck.innerHTML = `<ul class="woocommerce-error">
      <li><strong>Error: </strong> The password field is empty.</li>
    </ul>`;

    changeCheck.style.display = "block";
    return;
  }
}

eye.forEach((el) => {
  el.onclick = function () {
    if (this.previousElementSibling.type === "password") {
      this.previousElementSibling.type = "text";
      this.classList.replace("fa-eye", "fa-eye-slash");
    } else {
      this.previousElementSibling.type = "password";
      this.classList.replace("fa-eye-slash", "fa-eye");
    }
  };
});

let formTwo = document.querySelector(".form-2");
let couponInp = document.getElementById("coupon");
let coupon = document.querySelector(".coupon");
let loader = document.querySelector(".woocommerce-items .loader");

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
      coupon.innerHTML = `
      <ul class="woocommerce-error">
        <li>Please enter a coupon code.</li>
      </ul>`;
      coupon.style.display = "block";
    }, 2001);
  }
}

let checkedOpen = document.querySelector("#create");
let openFiledpass = document.querySelector(".password");
checkedOpen.onchange = () => openFiledpass.classList.toggle("active");

let changePass = document.querySelector("input[name='password']");
let changeText = document.querySelector(".woocommerce-password-strength");
let small = document.querySelector("small");
function validPass() {
  changePass.classList.add("valid");
  changeText.style.display = "block";
  small.style.display = "block";

  if (changePass.value == "") {
    changePass.classList.remove("valid");
    small.style.display = "none";
    changeText.style.display = "none";
    return;
  }

  if (changePass.value.length <= 6) {
    changeText.innerHTML = `Very weak - Please enter a stronger password.`;
  } else {
    changeText.style.display = "none";
    changePass.classList.remove("invalid");
  }

  if (changePass.value.length > 6 && changePass.value.length < 12) {
    changeText.innerHTML = `Weak - Please enter a stronger password.`;
    changeText.style.cssText =
      "display: block; background-color: #fbc5a9; border-color: #f78b53";
    return;
  }

  if (changePass.value.length >= 12 && changePass.value.length < 18) {
    changeText.innerHTML = `Medium`;
    small.style.display = "none";
    changeText.style.cssText =
      "display: block; background-color: #ffe399; border-color: #ffc733";
  }

  if (changePass.value.length >= 18) {
    changeText.innerHTML = `Strong`;
    small.style.display = "none";
    changeText.style.cssText =
      "display: block; background-color: #c1e1b9; border-color: #83c373";
    return;
  }
}
changePass.oninput = validPass;

function showProducts() {
  let productStorage = JSON.parse(localStorage.getItem("saved")) || [];
  if (productStorage) {
    let html = "";
    productStorage.map((el) => {
      const { title, quantity, price } = el;
      html += `
      <tr>
        <td class="text-left">
          <span class="woocommerce-quantity">
            <span class="woocommerce-title">
              ${title}
            </span>
            <b>× ${quantity}</b>
          </span>
        </td>
        <td class="text-right">£${(price * quantity).toFixed(2)}</td>
      </tr>
      `;
    });
    document.querySelector(".shop_table tbody").innerHTML = html;
    calcSubTotalPrice(productStorage);
  }
}
showProducts();

function calcSubTotalPrice(productStorage) {
  let shopTotal = document.querySelectorAll(".shop_table .total");
  let totalPrice = 0;
  productStorage.map((el) => (totalPrice += el.price * el.quantity));
  shopTotal.forEach((el) => (el.innerHTML = "£" + totalPrice.toFixed(2)));
}

let formThree = document.querySelector(".form-3");
let checkValid = document.querySelectorAll(".check-valid");
let first = document.getElementById("first");
let last = document.getElementById("last");
let street = document.getElementById("street");
let country = document.getElementById("country");
let town = document.getElementById("town");
let post = document.getElementById("post");
let phone = document.getElementById("phone");
let email = document.getElementById("email");

formThree.addEventListener("submit", function (e) {
  for (let i = 0; i < checkValid.length; i++) {
    if (checkValid[i].value === "") {
      checkValid[i].classList.add("invalid");
      checkValid[i].classList.remove("valid");
      e.preventDefault();
    } else {
      checkValid[i].classList.remove("invalid");
      checkValid[i].classList.add("valid");
    }
  }
});

// var headers = new Headers();
// headers.append(
//   "X-CSCAPI-KEY",
//   "NHhvOEcyWk50N2Vna3VFTE00bFp3MjFKR0ZEOUhkZlg4RTk1MlJlaA=="
// );
// var requestOptions = {
//   method: "GET",
//   headers: headers,
//   redirect: "follow",
// };

// async function invokeCountriesAPI() {
//   let countries = `https://countriesnow.space/api/v0.1/countries/states`;
//   let country = document.querySelector("#country");
//   let res = await fetch(countries);
//   let data = await res.json();
//   data.data.map((el) => {
//     country.innerHTML += `<option value="${el.iso2}">${el.name}</option>`;
//   });
// }
// invokeCountriesAPI();

// async function invokeStatesAPI() {
//   let state = document.querySelector("#state");
//   let states = `https://countriesnow.space/api/v0.1/countries/states`;
//   let res = await fetch(states);
//   let data = await res.json();
//   console.log(data.data[0].states[0]);
//   for (let i = 0; i < data.data.length; i++) {
//     console.log(data.data[i].states[i].name);
//     state.innerHTML += `<option value="${el.states[0]}">${el.states[0].name}</option>`
//   }
// }
// invokeStatesAPI();