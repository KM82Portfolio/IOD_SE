const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2021,
    owner: {
        name: "Jake",
        age: 27,
    },
};

// Make a shallow copy of another car here
const car2={};
for(let key in car){
    car2[key]=car[key];
}
console.log("Shallow copy of car",car2);

// Update the value of the shallow copy make to "BMW"
car2.make="BMW";
console.log("Original car make",car.make);
console.log("Updated the value of the shallow copy make to 'BMW'",car2.make);

// Update the value of the second level owner's age of the clone one to 31
const car3 = {...car};
car3.owner.age=31
console.log('Spread copy car owner age is now',car3.owner.age);

// compare car first level with clone
//console.log(car.make === clone.make, false); // should return false
console.log('Comparing original car obj with shallow copy car2 1st level',car.make === car2.make); // should return false

// compare car second level with clone
console.log('Comparing original car obj with shallow copy car2 owner.age',car.owner.age === car2.owner.age); // should return true

// Make a deep copy this time using the same car object
let _ = require('lodash');
car4=_.cloneDeep(car);

// Update the value of the second level owner's age of the deep clone one to 77
car4.owner.age=77;

// compare car second level with deep clone
console.log('Comparing deep clone .owner.age with original obj',car.owner.age === car4.owner.age); // should return false

// Bonus: delete the owner property of the original object "car"