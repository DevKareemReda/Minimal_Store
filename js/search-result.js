let form = document.querySelector(".search-box");
let searchResult = document.querySelector(".search-box input[type='text']");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  filterSearch();
});


function filterSearch() {
  let result = searchResult.value;
  const params = new URLSearchParams();
  params.append("s", result);
  location.href = `search.html?${params}`
}

