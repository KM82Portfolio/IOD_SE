// Convert this to map() but need to know how to iterate through dropdown-menu <div> <a> children
let filteredProducts='';

let catDDMContainer = document.querySelector('.cat-container');

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
    const products = await pdtResponse.json();
    populateProductContainer(products);

    return products;//for testing accessing products outside of this async function
}

async function fetchCategories(){
    const catResponse = await fetch("https://fakestoreapi.com/products/categories");
    const cats = await catResponse.json();
    console.log(cats);
    
    return cats;
}
// fetchCategories();

// main() style async function that allows for eventListeners
async function main(){

    let pdts = await fetchProducts();
    console.log('Sven',pdts);

    let cats = await fetchCategories();
    let allFilter = document.querySelector('#all-filter');
    allFilter.addEventListener('click',(e)=>populateProductContainer(pdts));//add button that shows everything

    cats.forEach((cat)=>{
        let catBtn = document.createElement('button');
        // catBtn.className = 'dropdown-item';
        catBtn.innerText=cat;
        catBtn.addEventListener('click',(e)=>{
            const filteredPDT = pdts.filter((pd)=> pd.category===cat);
            populateProductContainer(filteredPDT);
        })
        catDDMContainer.appendChild(catBtn);
      })
    
    // display filtered products if user selects to filter, else display all products
    filteredProducts!='' ? populateProductContainer(filteredProducts) : populateProductContainer(pdts);

}

main();