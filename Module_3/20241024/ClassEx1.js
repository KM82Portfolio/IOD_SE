/*
Exercise 1: “Superhero Team-Up” - Using call to Control Context
Goal: Understand how call works to invoke a function with a specific this value and arguments.
Instructions:
Create a superhero object with a name and a power property.
Write a function usePower that logs a message about using the superhero's power.
Use call to invoke the usePower function in the context of different superheroes.
*/

const superhero1 = {
    name: "Superman",
    power: "fly",
    usePower() {
        console.log(`${this.name} is using their ability to ${this.power}!`);
      }
};
  
const superhero2 = {
    name: "Flash",
    power: "run at light speed"
};
  
superhero1.usePower()

/*
Exercise 2: “Team Meeting” - Passing Arguments with apply
Goal: Learn how to use apply to invoke a function with a specific context and an array of arguments.
Instructions:
Create an object teamLeader with a name and a method announceMeeting.
Write a function startMeeting that logs which team members are attending.
Use apply to invoke startMeeting in the context of teamLeader, passing an array of team members.
*/

//EXAMPLE 1
//=========
const teamLeader = {
    name: "Iron Man"
};
  
function startMeeting(teamMembers) {
    console.log(`${this.name} is starting a meeting with: ${teamMembers.join(", ")}`);
}
  
const teamMembers = ["Captain America", "Thor", "Hulk"];

//EXAMPLE 2: call()
//=================
function isOdd() {
    return this % 2;
} // returns true if number is odd, false otherwise

function getOddNumbers() {
    // arguments is not an array, but it 'borrows' the filter function from Array by using call
    return Array.prototype.filter.call(arguments, isOdd); //-> [10, 1, 3, 4, 8, 9].filter(isOdd);
}

let results = getOddNumbers(10, 1, 3, 4, 8, 9);
console.log(results); // [ 1, 3, 9 ] (array of all odd arguments)

//EXAMPLE 3
//=========
const arr = [1, 2, 3, 4, 5];

function forCall(a, b, c, d, e) {
    return a + b + c + d + e;
}

console.log(forCall.call(null, arr[0], arr[1], arr[2], arr[3], arr[4]));
console.log(forCall.apply(null, arr));  

//CLASS EX 3
/*
Exercise 3: “Monster Battle” - Pre-configuring Functions with bind
Goal: Understand how bind can create a new function with a specific this value and optionally, pre-configure some arguments.
Instructions:
Use the monster object with a name and a method attack.
Write a function attackMonster that logs a message about attacking a city.
Use bind to create a new function for the monster to attack specific cities.
*/
const monster = {
    name: "Godzilla",
};

function attack(city) {
    console.log(`${this.name} is attacking ${city}!`);
}

// write your code here
const attackNewYork = attack.bind(monster,'New York') //<function name>.bind(<function we want to bind>,<argument to send to function>)
const attackTokyo = attack.bind(monster,'Tokyo')
attackNewYork();  // Godzilla is attacking New York!
attackTokyo();    // Godzilla is attacking Tokyo!

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind

//CLASS EX 4
/*
Exercise 4: “Cooking with Chefs” - Using call, apply, and bind in a Kitchen Simulation
Goal: Combine all three (call, apply, bind) in a real-world context of running a kitchen with multiple chefs.
Instructions:
Create a chef object with a name and a method cookDish.
Write a function prepareDish that takes multiple ingredients and logs the dish being prepared.
Use call and apply to make different chefs prepare different dishes with various ingredients.
Use bind to create a new function that always makes one chef prepare a specific dish.
*/
const chef1 = {
    name: "Gordon Ramsay",
    cookDish(dish, ingredients) {
      console.log(`${this.name} is preparing ${dish} with ${ingredients.join(", ")}!`);
    }
};

const chef2 = {
    name: "Jamie Oliver"
};

// Using `call` to invoke `cookDish` with individual arguments
function cookDish(dish, ingredients) {
    console.log(`${this.name} is preparing ${dish} with ${ingredients.join(", ")}!`);
}
cookDish.call(chef2,'sphagetti',['meatballs','lettuce'])
cookDish.call({name:'chef3',specialty:'pie'},'pie',['peas','carrots'])

//cookDish.call({name:'chef3'},'pie','tomatoes','lentils')//doesn't work
// Using `apply` to invoke `cookDish` with an array of arguments
cookDish.apply(chef1,['sphagetti',['meatballs','lettuce']]) //need at least outermost array for arguments
cookDish.apply({name:'chef3',specialty:'pasta'},['pie',['peas','carrots']]) //Probably the clearest way
//cookDish.apply({name:'chef3'},['pie','peas','carrots']) //doesn't work!

// Using `bind` to create a new function for always making Pizza
const c1 = cookDish.bind(chef2,'sphagetti',['meatballs','lettuce'])
c1()
//makePizza(["cheese", "tomatoes"]);  // Gordon Ramsay is preparing Pizza with cheese, tomatoes!

Obj1 = {p1:'Prop1',p2:'Prop2',p3(test) {return test*3}}
function Obj2(name){ //constructor function
    this.name=name
}
Obj2.prototype=Obj1//make Obj2 inherit Obj1, Obj1 becomes prototype of Obj2
let O2 = new Obj2
console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(O2)))
console.log(Object.getOwnPropertyNames(O2))

console.log(`
FINAL CLASS EXERCISE
====================
`)
//Create a constructor function Car that initializes a car with properties like make, model, and year.
// Add a method getDetails to Car.prototype that returns a string describing the car.
function Car(make, model, year){// Convention is to capitalize constructor
    this.make=make
    this.model=model
    this.year=year
}

car1 = new Car('Honda','Civic',2000)
Car.prototype.getDetails = function(){
    console.log(`Car is a ${this.make}, model ${this.model} made in year ${this.year}`)
    return `${this.make}, ${this.model}, ${this.year}`
}
car1.getDetails()

console.log(`
`)