// Convert this to map() but need to know how to iterate through dropdown-menu <div> <a> children
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

let filteredProducts='';

async function fetchProducts() {

    const pdtResponse = await fetch("https://fakestoreapi.com/products");
    const products = await pdtResponse.json();
    populateProductContainer(products);

    return products;//for testing accessing products outside of this async function
}

// main() style async function that allows for eventListeners
async function main(){

  let pdts = await fetchProducts();
  console.log('Sven',pdts);
  
  let Electronics_DDLI_Sel = document.querySelector('#Electronics_DDLI');
  Electronics_DDLI_Sel.addEventListener('click',(e)=>{
      console.log(e.target.innerText);
      filteredProducts = filterByCategories(pdts,e.target.innerText);
      console.log('Electronics_DDLI_Sel Triggered');
  });

  let Men_Clothing_DDLI_Sel = document.querySelector('#Men_Clothing_DDLI');
  Men_Clothing_DDLI_Sel.addEventListener('click',(e)=>{
      console.log(e.target.innerText);
      filteredProducts = filterByCategories(pdts,e.target.innerText);
      console.log('Men_Clothing_DDLI_Sel Triggered');

  });

  filteredProducts = filterByCategories(pdts,"electronics");
  console.log('Filtered Products ',filteredProducts);
  
  // display filtered products if user selects to filter, else display all products
  filteredProducts!='' ? populateProductContainer(filteredProducts) : populateProductContainer(pdts);

}

main();