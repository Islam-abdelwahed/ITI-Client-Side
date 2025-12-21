export let Fav = JSON.parse(localStorage.getItem("Fav")) || [];

function saveFav() {
    console.log(Fav);
    localStorage.setItem("Fav", JSON.stringify(Fav));
}

export function addToFav(product) {
    const item = Fav.find(i => i.id === product.id);

    if (item) return;
    else Fav.push(product);

    saveFav();
}

export function removeFromFav(id) {
    Fav = Fav.filter(i => i.id !== id);
    saveFav();
}

export function clearFav() {
    Fav = [];
    saveFav();
}
