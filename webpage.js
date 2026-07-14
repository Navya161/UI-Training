const   URL = "https://fakestoreapi.com/products"
const productsContainer = document.getElementById("products");

async function getProductid(){
    let data = await fetch(URL);
    let final_data =await data.json();
    final_data.forEach(product => {
        const card = document.createElement("div");
        card.classList.add("card");
         card.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p class="price">$${product.price}</p>
            <p class="category">${product.category}</p>
        `;
        productsContainer.appendChild(card);
    });
} 
getProductid();