let lostAccount = document.querySelector("form.lost-account");
lostAccount.addEventListener("submit", (e) => {
  e.preventDefault()
  checkUserEmail()
})

let userEmail = document.querySelector("#lost");
function checkUserEmail() {
  if (userEmail.value === "") {
    document.querySelector(".woocommerce-info").style.display = "block"
  } else {
    document.querySelector(".woocommerce-info").style.display = "none"
  }
}