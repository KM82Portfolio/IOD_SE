const phoneBookABC = new Map() //an empty map to begin with 
phoneBookABC.set('Annabelle', '0412312343') 
phoneBookABC.set('Barry', '0433221117') 
phoneBookABC.set('Caroline', '0455221182')

console.log(phoneBookABC)

// Q8a) Create a new phoneBookDEF Map to store names beginning with D, E or F
// Q8b) Initialise the contents of phoneBookDEF by passing in an array of keys/values
// Meaning LITERALLY a Map() of keys starting with ''D'/'E'/'F' like so?
const phoneBookDEF = new Map()
phoneBookDEF.set('Daniel', '123456') 
phoneBookDEF.set('Ellen', '789101') 
phoneBookDEF.set('Frank', '121314')

// Q8c) Update the phone number for Caroline
phoneBookABC.set('Caroline', '87654321') //can update values of existing keys using Map.set()

// Q8d) Write a function printPhoneBook(contacts) that prints the names and phone numbers in the given Map
// Guessing contacts is the Map object that will be taken as an argument to the function
function printPhoneBook(contacts){
    return contacts.forEach((k,v)=>console.log(`Name : ${k}, Phone Number : ${v}`))
}
printPhoneBook(phoneBookABC)

console.log(`
`)

// Q8e) Combine the contents of the two individual Maps into a single phoneBook Map
const phoneBookABCDEF = new Map([...phoneBookABC,...phoneBookDEF]);
printPhoneBook(phoneBookABCDEF);
console.log(`
`)