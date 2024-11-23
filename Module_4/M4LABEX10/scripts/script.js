// Global Variables
let filteredProducts='';
let catDDMContainer = document.querySelector('.cat-container');
let purchaseList = [];

// import {createProductCard,populateProductContainer,filterByCategories} from './functions.js';

function createProductCard(pdt){

    const pdtTemplate = document.querySelector('#card-template').content.cloneNode(true);
    pdtTemplate.querySelector('.card-title').innerText = pdt.title;
    pdtTemplate.querySelector('.card-text').innerText= pdt.description;
    let cardImg = pdtTemplate.querySelector(".card-img");// must split like this for img tags to access src property
    cardImg.src=pdt.image;
    pdtTemplate.querySelector('.card-category').innerText= pdt.category;
    pdtTemplate.querySelector('.buy-button').value = pdt.id;//for tracking what user buys later
    document.querySelector('#product-container').appendChild(pdtTemplate);

}

function populateProductContainer(products){
  
    let productContainer = document.querySelector('#product-container');
    productContainer.innerHTML='';

    products.forEach((pdt)=>{
      createProductCard(pdt);
    })
    // Buy Button Event Listener has to be added here becuase populateProductContainer() called everytime filter by navbar category buttons pressed 
    let buyBtn  = document.querySelectorAll('.buy-button');
    buyBtn.forEach((bb)=>{
        bb.addEventListener('click',(e)=>{
            console.log('Product ID Bought : ',e.target.value);
            purchaseList.push(e.target.value);
        })
    })

    console.log(purchaseList);

}

function addToCart(){

}

async function fetchProducts() {

    const pdtResponse = await fetch("https://fakestoreapi.com/products");
    const products = await pdtResponse.json();
    populateProductContainer(products);

    return products;
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