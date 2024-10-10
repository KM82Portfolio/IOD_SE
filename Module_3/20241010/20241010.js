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
//10 10 2024 Class Exercise 1
console.log(`
CLASS EXERCISE 1
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
`);
//Create an array colors containing the values: ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'].
let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

//Slice the array to get the first 3 colors.
console.log(`Slice the array to get the first 3 colors : ${colors.slice(0,2)}`);

//Use splice to remove the last 2 colors and replace them with 'cyan' and 'magenta'.
let splicedArray = colors.splice(colors.length-2,colors.length,'cyan','magenta');
console.log(`Use splice to remove the last 2 colors and replace them with 'cyan' and 'magenta' : ${colors}`);

//Use concat to merge the colors array with another array ['black', 'white'].
console.log(`Use splice to remove the last 2 colors and replace them with 'cyan' and 'magenta' : ${colors.concat(['black', 'white'])}`);

//Sort the combined array alphabetically.
console.log(`Use splice to remove the last 2 colors and replace them with 'cyan' and 'magenta' : ${colors.sort()}`);

//Reverse the sorted array.
console.log(`Use splice to remove the last 2 colors and replace them with 'cyan' and 'magenta' : ${colors.reverse()}`);