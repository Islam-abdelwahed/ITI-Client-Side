import { removeFromCart, updateQty } from "../services/cartService.js";

export function createCartItem(item) {
    const row = document.createElement("div");
    row.className = "cart-item";

    row.innerHTML = `
        <img src="${item.image}">
        <span>${item.title}</span>
        <span>$${item.price}</span>

        <div class="qty">
            <button class="minus">−</button>
            <span>${item.qty}</span>
            <button class="plus">+</button>
        </div>

        <button class="remove">✖</button>
    `;

    row.querySelector(".plus").onclick = () => {
        updateQty(item.id, +1)
        location.reload()
    };
    row.querySelector(".minus").onclick = () => {
        updateQty(item.id, -1)
        location.reload()
    };
    row.querySelector(".remove").onclick = () => {
        removeFromCart(item.id)
        location.reload()
    };

    return row;
}
