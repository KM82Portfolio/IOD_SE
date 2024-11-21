// main() style async function that allows for eventListeners
(async ()=> {

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

})(); 