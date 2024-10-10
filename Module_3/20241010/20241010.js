//10 10 2024 Class Exercise 1
console.log(`
CLASS EXERCISE 1
================
    `);
/*Create a string variable called sentence with the value: "The quick brown fox jumps over the lazy dog".*/
let sentence = "The quick brown fox jumps over the lazy dog";

/*Write code to: Print the length of the string.*/
console.log(`Sentence length is ${sentence.length}`);

//Write code to: Convert the entire string to uppercase.
console.log(`Sentence uppercase ${sentence.toUpperCase()}`);

//Extract the word "fox" using the substring method.
console.log(`Fox extracted from Sentence : ${sentence.substring(16,19)}`);

//Replace the word "lazy" with "energetic".
console.log(`Sentence with the word "lazy" with "energetic" : ${sentence.replace("lazy","energetic")}`);

//Check if the sentence ends with "dog". Long way without using endsWith()
let checkWord = sentence.substring(sentence.length-3,sentence.length);
function checkCon(checkWord) {
    if(checkWord==="dog"){
        return true;
    }
}
console.log(`Sentence last word : ${checkCon(checkWord)}`);

//Split the string into an array of words and print the array.
let wordArray = sentence.split(" ");
console.log(`Sentence split into array by " " : ${wordArray}`);

let fatSentence = "   The quick brown fox jumps over the lazy dog   "
console.log(`Sentence trimmed : ${fatSentence}`);
let trimmedSentence = sentence.trim(" ");
console.log(`Sentence trimmed : ${trimmedSentence}`);

//10 10 2024 Class Exercise 2
console.log(`
CLASS EXERCISE 2
================
`);
//Create an array colors containing the values: ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'].
let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

//Slice the array to get the first 3 colors.
console.log(`Slice the array to get the first 3 colors : ${colors.slice(0,2)}`);

//Use splice to remove the last 2 colors and replace them with 'cyan' and 'magenta'.
colors.splice(colors.length-2,colors.length,'cyan','magenta');
console.log(`Use splice to remove the last 2 colors and replace them with 'cyan' and 'magenta' : ${colors}`);

//Use concat to merge the colors array with another array ['black', 'white'].
console.log(`Use concat to merge the colors array with another array ['black', 'white'] : ${colors.concat(['black', 'white'])}`);

//Sort the combined array alphabetically.
console.log(`Sort the combined array alphabetically : ${colors.sort()}`);

//Reverse the sorted array.
console.log(`/Reverse the sorted array. : ${colors.reverse()}`);

console.log(`
find() demo
`);

const arr = ["Wind", "Water", "Fire", "Air"];
console.log(arr);
console.log(`arr.find() demo`,
    arr.find((item, i) => {
        return item === "Fire";
    })
);

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

console.log(`
map() Demo    
`);

const products = [
    { id: 1, title: 'Sleeveless Tee', price: 23.95, category: 'Shirts' },
    { id: 2, title: "Men's Hoodie", price: 54.95, category: 'Winter' },
    { id: 3, title: "Denim Jeans", price: 49.95, category: 'Pants' }
]
console.log(products);
console.log(`Dynamically generate html headers for each products object`)
let titles = products.map(product => product.title)
let h2titles = products.map(product => '<h2>'+product.title+'</h2>')
let raisedPrices = products.map(product => ({...product, price: product.price + 5}) )
console.log(titles) // [ 'Sleeveless Tee', "Men's Hoodie", 'Denim Jeans', 'Ladies Tee' ]
console.log(h2titles) // [ '<h2>Sleeveless Tee</h2>', "<h2>Men's Hoodie</h2>", '<h2>Denim Jeans</h2>',
'<h2>Ladies Tee</h2>'
console.log(raisedPrices) // all prices increased by $5

console.log(`
CLASS EXERCISE 3  
================  
`)

//Create an array numbers with values [1, 2, 3, 4, 5].
let a1 = [1, 2, 3, 4, 5];
console.log(`Create an array numbers with values [1, 2, 3, 4, 5]. ${a1}`);

//Add the number 6 to the end using push().
a2 = a1.push(6);
console.log(`Add the number 6 to the end using push(). ${a2}`);

//Remove the first number using shift().
a1.shift();
console.log(`Remove the first number using shift(). ${a1}`);

//Use map() to create a new array where each number is multiplied by 2.
var _ = require('lodash'); 
atimes2=[];
atimes2 = _.map(a1,elem=>elem*2); 
console.log(`Use map() to create a new array where each number is multiplied by 2. ${atimes2}`);

//Use reduce() to find the sum of all numbers in the numbers array.
a1.unshift(1)+a1;
a1.pop();
console.log(`a1 currently ${a1}`);
const a3 = a1.reduce((sumThusFar,sumToAdd)=>sumThusFar+sumToAdd,0);
console.log(`Use reduce() to find the sum of all numbers in the numbers array. ${a3}`)

//Find the index of the number 4 in the array.
a1.unshift(1)+a1
console.log(`a1 currently ${a1}`);
console.log(`Find the index of the number 4 in the array. ${a1.indexOf(4)}`)

//Filter the array to only include numbers greater than 2.
amt2 = a1.filter((a1)=>a1>2);
console.log(`Filter the array to only include numbers greater than 2. ${amt2}`);
console.log(`Filter the array to only include numbers greater than 2. ${a1.filter((a1)=>a1>2)}`);

console.log(`
`);