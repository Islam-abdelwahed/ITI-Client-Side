import { Fav, clearFav } from "../services/favService.js"
import { createfavItem } from "../components/favItem.js"

console.log(Fav);

const container = document.getElementById("fav-container")
const clear = document.getElementById("clear")

Fav.forEach(element => {
    const item = createfavItem(element);
    container.appendChild(item);
});

clear.addEventListener('click', () => {
    clearFav()
    location.reload()
})