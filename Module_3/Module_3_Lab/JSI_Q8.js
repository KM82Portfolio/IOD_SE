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
    return contacts.forEach((k,v)=>console.log(`Name : ${v}, Phone Number : ${k}`)) 
}
printPhoneBook(phoneBookABC)

console.log(`
`)

// Q8e) Combine the contents of the two individual Maps into a single phoneBook Map
const phoneBookABCDEF = new Map([...phoneBookABC,...phoneBookDEF]);
printPhoneBook(phoneBookABCDEF);
console.log(`
`)

// Q8a) If asking to generate a Map() object that only accepts names starting with 'D', 'E' or 'F'
// function mapDEF(name,phoneNum){
//     const phoneBookDEF = new Map();
//     if(name.startsWith('D')){phoneBookDEF.set(name,phoneNum);}
//     // phoneBookDEF.set(name,phoneNum) ? name.startsWith('D') : {}
//     return phoneBookDEF
// }

// mD1 = mapDEF('Daniel', '123456');
// mD2 = mapDEF('Johnny', '654321');
// printPhoneBook(mD1);
// printPhoneBook(mD2);

const phoneBookDEF1 = new Map()
phoneBookDEF1.set('Daniel', '123456') 
phoneBookDEF1.set('Johnny', '654321') 
phoneBookDEF1.set('Frank', '121314')

function mapDEF1(contacts){
    let mpDEF1 = new Map();
    contacts.forEach((k,v)=>{
        if(v.startsWith('D')||v.startsWith('E')||v.startsWith('F')){
            mpDEF1.set(k,v);
        }
    })
    return mpDEF1;
}
console.log('phoneBookDEF1',phoneBookDEF1);
console.log('Map Filter Test',mapDEF1(phoneBookDEF1));