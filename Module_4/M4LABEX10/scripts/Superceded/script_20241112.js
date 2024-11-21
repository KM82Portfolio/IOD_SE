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
function filterByCategories(productsArray,categoryToFilter){

  return productsArray.filter((pdt)=>{
    if(pdt.category===categoryToFilter) return pdt;
  });

}

async function fetchProducts() {

    const pdtResponse = await fetch("https://fakestoreapi.com/products");
    // console.log('1 ',response);
    const products = await pdtResponse.json();
    // console.log('2 ',products);
    populateProductContainer(products);

    const catResponse = await fetch('https://fakestoreapi.com/products/categories')
    const categories = await catResponse.json();
    console.log('Cat ',categories) //test
    
    let filteredProducts='';
    filteredProducts = filterByCategories(products,"electronics");
    console.log('Filtered Products ',filteredProducts);
    
    // display filtered products if user selects to filter, else display all products
    filteredProducts!='' ? populateProductContainer(filteredProducts): populateProductContainer(products);

    return products;
}

fetchProducts();


// Test accessing return from async function
(async ()=> {
    console.log('NS');
    console.log('PA ',await fetchProducts())
})(); 
let productContainer = document.querySelector('#product-container')

// function getCategorySelection(){

//   for(let a of document.querySelectorAll('.dropdown-menu')){
//       a.addEventListener('click',function(e){
//           e.target.classList.add
//       })
//   }

// }