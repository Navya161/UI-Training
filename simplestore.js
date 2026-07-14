const url = "https://fakestoreapi.com/products";
async function getProductList() {
    let data = await fetch(url);
    let final_data = await data.json();
    console.log(final_data);
    let pro = document.getElementById("products");
    final_data.forEach(function(product) {
        let card = document.createElement("div");
        card.className = "col-12 col-lg-3 col-md-4 col-sm-6";
        card.innerHTML = `
        <div class="card" style="width: 18rem;">
  <img src="${product.image}" class="card-img-top">
  <div class="card-body">
    <h5 class="card-title">${product.title}</h5>
    <p class="card-text">${product.price}</p>
    <p class="card-text">${product.category}</p>
    
  </div>
</div>`;
        pro.appendChild(card);
    });
}
getProductList();