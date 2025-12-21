export let cart = JSON.parse(localStorage.getItem("cart")) || [];

function saveCart() {
    console.log(cart);
    localStorage.setItem("cart", JSON.stringify(cart));
}

export function addToCart(product) {
    const item = cart.find(i => i.id === product.id);

    if (item) item.qty++;
    else cart.push({ ...product, qty: 1 });

    saveCart();
}

export function updateQty(id, delta) {
    const item = cart.find(i => i.id === id);
    if (!item) return;

    item.qty += delta;

    if (item.qty <= 0) {
        cart = cart.filter(i => i.id !== id);
    }

    saveCart();
}

export function removeFromCart(id) {
    cart = cart.filter(i => i.id !== id);
    saveCart();
}

export function clearCart() {
    cart = [];
    saveCart();
}
