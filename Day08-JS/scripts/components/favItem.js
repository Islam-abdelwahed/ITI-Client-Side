import { removeFromFav } from "../services/favService.js";

export function createfavItem(product) {
    const row = document.createElement("div");
    row.className = "product";

    row.innerHTML = `
    <div class="product-image">
      <img src="${product.image}" alt="${product.description}">
    </div>

    <div class="product-info">
      <h3>${product.title}</h3>
      <p class="price">$${product.price}</p>
    </div>

    <div class="product-actions">
        <button class="remove">✖</button>
    </div>
  `;

    row.querySelector(".remove").onclick = () => {
        removeFromFav(product.id)
        location.reload()
    };

    return row;
}
