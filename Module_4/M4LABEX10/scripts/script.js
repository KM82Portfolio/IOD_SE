async function fetchProducts() {
    const response = await fetch("https://fakestoreapi.com/products");
    console.log(response);
    const products = await response.json();
    console.log(products);
    return products;
}

let productContainer = document.querySelector('#product-container')

fetchProducts();