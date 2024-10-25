let car = {
    make: "Porsche", 
    model: '911', 
    year: 1964, 
    description() {
        console.log(`This car is a ${this.make} ${this.model} from ${this.year}`); 
    } }; 

car.description(); //works 
setTimeout(car.description, 200); //fails

//Q5a) Fix the setTimeout call by wrapping the call to car.description() inside a function
setTimeout(()=>car.description(), 200); //works

//Q5b) Change the year for the car by creating a clone of the original and overriding it
let clonedcar = {...car,year:2000}
console.log(`Original car year : ${car.year}`)
console.log(`Cloned car year : ${clonedcar.year}`)

//Q5c) Does the delayed description() call use the original values or the new values from b)? Why?
console.log(`Original car, because ()=>car.description() `)

let reclonedcar = {...car,make:'BYD',model:'Atto 3'}
setTimeout(()=>reclonedcar.description(),200)