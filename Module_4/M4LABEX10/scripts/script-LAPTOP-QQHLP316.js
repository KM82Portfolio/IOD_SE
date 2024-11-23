function createProductCard(pdt){
    const pdtTemplate = document.querySelector('#card-template').content.cloneNode(true);
    pdtTemplate.querySelector('.card-title').innerText = pdt.title;
    pdtTemplate.querySelector('.card-text').innerText= pdt.content;
    document.querySelector('#product-container').appendChild(pdtTemplate);
}

function populateProductCards(products){
  
    let productContainer = document.querySelector('#product-container');
    productContainer.innerHTML='';

    products.forEach((pdt)=>{
      createProductCard(pdt);
    })

}

async function fetchProducts() {
    const response = await fetch("https://fakestoreapi.com/products");
    const products = await response.json();
    populateProductCards(products);
    return products;
}
// Test accessing return from async function
(async ()=> {
    console.log('NS');
    console.log('PA ',await fetchProducts())
})(); 

fetchProducts();