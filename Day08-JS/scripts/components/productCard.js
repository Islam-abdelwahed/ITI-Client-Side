import { addToCart } from "../services/cartService.js"
import { addToFav } from "../services/favService.js"

export function createProductCard(product) {
    const card = document.createElement("div");
    card.className = "product";

    card.innerHTML = `
    <div class="product-image">
      <img src="${product.image}" alt="${product.description}">
    </div>

    <div class="product-info">
      <h3>${product.title}</h3>
      <p class="price">$${product.price}</p>
    </div>

    <div class="product-actions">
      <button class="btn-cart">Add to Cart</button>
      <button class="btn-wishlist">❤</button>
    </div>
  `;

    card.querySelector(".btn-cart").addEventListener('click', () => addToCart(product))
    card.querySelector(".btn-wishlist").addEventListener('click', () => addToFav(product))

    console.log(card);
    return card;
}
