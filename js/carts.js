function showProducts() {
  let productStorage = JSON.parse(localStorage.getItem("saved")) || [];
  if (productStorage) {
    let html = "";
    productStorage.map((el) => {
      const { id, images, title, price } = el;
      html += `
			<tbody>
				<tr>
				<td data-title="product"
				class="table-products d-flex justify-content-between align-items-center">
				<span class="close" onclick="closeProducts(${id},parentElement.parentElement)">&times;</span>
				<div class="product-thumbnails">
				<img src="${images[0]}"
				alt="">
				<img src="${images[1]}"
				alt="">
				</div>
				<a href="#" class="float-end">${title}</a>
				</td>
				<td data-title="price">
				<span class="woocommerce-price-amount float-end">
				<span class="woocommerce-currencySymbol">£</span>${price}
				</span>
				</td>
				<td data-title="quantity">
				<form action="#" class="float-end">
				<input type="number" size="4" min="1">
				</form>
				</td>
				<td data-title="subtotal">
				<span class="woocommerce-price-amount amount float-end">£277.98</span>
				</td>
				</tr>
				</tbody>
			`;
    });
		document.querySelector("table").innerHTML += html;
  }
}
showProducts();

// function closeProducts(id,parent) {
//   let filterItems = productStorage.filter((el) => el.id !== id);
//   localStorage.setItem("saved", JSON.stringify(filterItems));
//   showProducts(filterItems);
// }
