let three = "3" 
let four = "4" 
let thirty = "30"

//what is the value of the following expressions? 
let addition = Number(three) + Number(four)
console.log(addition)

let multiplication = three * four
let division = three / four
three = "3" 
four = "4" 
console.log(multiplication)// direct conversion
console.log(division)// direct conversion

let subtraction = three - four
console.log(subtraction)// direct conversion

three = "3" 
four = "4" 
thirty = "30"
let lessThan1 = three < four // comparing alphabetic string value, does not convert to number
let lessThan2 = thirty < four// comparing alphabetic string value, does not convert to number
console.log(lessThan1)
console.log(lessThan2)

// 3. Which of the following console.log messages will print? Why?
if (0) console.log('#1 zero is true') // falsey
if ("0") console.log('#2 zero is true') // truthy
if (null) console.log('null is true') // falsey
if (-1) console.log('negative is true') // truthy, any non-zero number
if (1) console.log('positive is true') // truthy, any non-zero number

// 4. Rewrite this if using the ternary/conditional operator '?'. Test it with different values for a and b. What does the ‘+=’ do?
let a = 2, b = 3; let result = `${a} + ${b} is `; 
/*
if (a + b < 10) { result += 'less than 10'; } 
else { result += 'greater than 10'; }
*/
(a + b < 10) ? result += 'less than 10' : 'greater than 10';

// 5. Rewrite the following function using: 
// a) function expression syntax, and 
// b) arrow function syntax. Test each version to make sure they work the same.
// function getGreeting(name) { return 'Hello ' + name + '!'; }
let getGreeting = ((name)=>{ return 'Hello ' + name + '!'; })
console.log(getGreeting("who's there?"))

// 6. a) Complete the inigo object by adding a lastName property and including it in the greeting. 
// b) Complete getCatchPhrase so that if the person argument has 6 fingers, it instead prints his famous catch phrase to the console. HINT: see https://www.imdb.com/title/tt0093779/characters/nm0001597. 
// c) Update getCatchPhrase to use arrow function syntax and a conditional operator.
const westley = { name: 'Westley', numFingers: 5 } 
const rugen = { name: 'Count Rugen', numFingers: 6 } 
const inigo = { 
    firstName: 'Inigo', 
    lastName: 'Lopez',
    greeting(person) { let greeting = `Hello ${person.name}, my name is ${this.firstName} ${inigo.lastName}. `; 
        console.log(greeting + this.getCatchPhrase1(person)); 
    }, 
    getCatchPhrase(person) { 
        if(person.numFingers==6){
            return 'Hello. My name is Inigo Montoya. You killed my father. Prepare to die.'; 
        }else{
            return 'Nice to meet you friend with .'; 
        }
    },
    getCatchPhrase1:(person)=>{ // NOTE SYNTAX!
        return (person.numFingers==6) ? 
        'Hello. My name is Inigo Montoya. You killed my father. Prepare to die.':'Nice to meet you friend with .'; 
    } 
} 

inigo.greeting(westley)
inigo.greeting(rugen)

// 7. The following object represents a basketball game and keeps track of the score as the game progresses. 
// a) Modify each of the methods so that they can be ‘chained’ together and the last line of the example code works
const basketballGame = { 
    score: 0, 
    foul:0,
    freeThrow() { this.score++; return this;}, 
    basket() { this.score += 2; return this;}, 
    threePointer() { this.score += 3; return this;}, 
    halfTime() { console.log('Halftime score is '+this.score); return this;}, 
    fullTime() { console.log('FullTime score is '+this.score + 'fouls:'+this.fouls); return this;} ,
    setFoul(){this.foul++;return this;}
}

basketballGame.basket().freeThrow().freeThrow().basket().threePointer().halfTime().setFoul(3).fullTime();

// Q8
const sydney = { 
    name: 'Sydney', 
    population: 5_121_000, 
    state: 'NSW', 
    founded: '26 January 1788', 
    timezone: 'Australia/Sydney'
}
const auckland = { 
    name: 'Auckland', 
    population: 2e6, 
    state: 'North Island?', 
    founded: '26 January 1788', 
    timezone: 'NZST'
}
function printCityProps(city){
    for(prop in city){
        console.log(`${prop}:${city[prop]}`);
    }
}
printCityProps(sydney)
printCityProps(auckland)

// Q9
let teamSports = ['Hockey', 'Cricket', 'Volleyball']; 
let dog1 = 'Bingo'; 
let cat1 = { name: 'Fluffy', breed: 'Siberian' };

moreSports = [...teamSports,'Soccer']
dog2 = [...dog1,'Terrier']
cat2 = {...cat1,eyes:'Green'}
console.log(moreSports)
console.log(dog2)
console.log(cat2)

function Person(name, age) { 
    this.name = name; 
    this.age = age; 
    this.human = true; 
}
p1 = Person('John',24)
p2 = Person('Jane',23)

function personPrinter(person){
    for(prop in person){
        console.log(`${prop}:${person[prop]}`);
    }
}
personPrinter(p1)
personPrinter(p2)

console.log(`
`)

personArray=[p1,p2]
personPrinter.apply(personArray)
function personPrinter1(personArray){
    console.log('Array Printer!')
    personArray.apply(personPrinter)
}
console.log(`
`)
class PersonClass{
    constructor(name, age){
        this.name = name; 
        this.age = age; 
        this.human = true;
          
    }
   canDrive=function(){
        return (this.age>18)?'Yes':'No';
    };
    
}
p3 = new PersonClass('Danny',83)
personPrinter(p3)

let p4= new PersonClass('Billy',21)
console.log(p4.canDrive())