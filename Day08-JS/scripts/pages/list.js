import { createProductCard } from "../components/productCard.js"

const container = document.getElementById("products-container")

fetch("./data/data.json")
    .then(res => res.json())
    .then(_products => {
        _products.forEach(product => {
            const card = createProductCard(product);
            container.appendChild(card);
        });
    })
    .catch(err => console.error("Error loading JSON:", err));
