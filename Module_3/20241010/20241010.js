const hobbits = ['Bilbo', 'Frodo', 'Samwise', 'Merry', 'Pippin']
hobbits.forEach(
    (hobbit, index) => { // usually we use an arrow function here
        console.log(`#${index}: ${hobbit}`) // runs once for every item in array
    }
)

const clothing = [
    { id: 1, title: 'Sleeveless Tee', price: 23.95, category: 'Shirts' },
    { id: 2, title: "Men's Hoodie", price: 54.95, category: 'Winter' },
    { id: 3, title: "Denim Jeans", price: 49.95, category: 'Pants' }
]

//Why doesn't this work?
let searchResult1 = clothing.find(
    (res)=>{res.title == "Men's Hoodie"}
)
//Why doesn't this work?
let searchResult2 = clothing.find(
    (res)=>res.title == "Men's Hoodie"
)
let searchResult3 = clothing.find(
    res=>res.title == "Men's Hoodie"
)

console.log(searchResult1); //returns undefined
console.log(searchResult2); //returns array item at index 1 { id: 2, title: "Men's Hoodie", price: 54.95, category: 'Winter' }
console.log(searchResult3); //returns array item at index 1 { id: 2, title: "Men's Hoodie", price: 54.95, category: 'Winter' }
console.log(`Using Template Literals yields ${searchResult3}`); //returns [object Object]

//testing class exercise work using lodash  
var _ = require('lodash'); 
c = ["123","456"];
d = _.map(c,x=>parseInt(x)); 
for(let i=0;i<d.length;i++){
    console.log(d[i],typeof d);
}
