function createProductCard(pdt){
    const pdtTemplate = document.querySelector('#card-template').content.cloneNode(true);
    pdtTemplate.querySelector('.card-title').innerText = pdt.category;
    pdtTemplate.querySelector('.card-text').innerText= pdt.description;
    document.querySelector('#product-container').appendChild(pdtTemplate);
}

function populateProductContainer(products){
  
  let productContainer = document.querySelector('#product-container');
  productContainer.innerHTML='';

  products.forEach((pdt)=>{
    createProductCard(pdt);
  })

}

async function fetchProducts() {
    const response = await fetch("https://fakestoreapi.com/products");
    // console.log('1 ',response);
    const products = await response.json();
    // console.log('2 ',products);
    populateProductContainer(products);
    return products;
}

fetchProducts();

// Test accessing return from async function
(async ()=> {
    console.log('NS');
    console.log('PA ',await fetchProducts())
})(); 
let productContainer = document.querySelector('#product-container')

