async function fetchProducts() {
    const response = await fetch("https://fakestoreapi.com/products");
    console.log('1 ',response);
    const products = await response.json();
    console.log('2 ',products);
    return products;
}
(async ()=> console.log('PA ',await fetchProducts()))(); 

// let productsArray;
// fetchProducts().then((r)=>{
//     console.log('r ',r);
//     // productsArray=r;
// });

// fetch("https://fakestoreapi.com/products")
//     .then((r)=>{
//         console.log('r ',r);
//         r.json();
//         console.log('r json ',r);
//     })
//     .then((js)=>{
//         console.log('js ',js);
//     })
let productContainer = document.querySelector('#product-container')

// fetchProducts();

// function addProducts(pdt){
//     const pdtTemplate = document.querySelector('#card-template').content.cloneNode(true);
//     pdtTemplate.querySelector('.card-title').innerText = pdt.title;
//     pdtTemplate.querySelector('.card-text').innerText= pdt.content;
//     document.querySelector('#product-container').appendChild(pdtTemplate);
// }

// function populateProducts(){
  
//   let pdtContainer = document.querySelector('#product-container');
//   pdtContainer.innerHTML='';

//   products.forEach((pdt)=>{
//     addProducts(pdt);
//   })

// }

// populateProducts();