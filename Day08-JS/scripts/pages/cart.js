import { cart, clearCart } from "../services/cartService.js"
import { createCartItem } from "../components/cartItem.js"

console.log(cart);

const container = document.getElementById("cart-container")
const clear = document.getElementById("clear")
const totalTXT = document.getElementById("total");

var total=0;
cart.forEach(element => {
    total += element.price;
    const item = createCartItem(element);
    container.appendChild(item);
});

clear.addEventListener('click', () => {
    clearCart()
    location.reload()
})

if(total){
totalTXT.textContent='Total: $'+total;}
else{
    totalTXT.textContent = "No Products in your cart"
}