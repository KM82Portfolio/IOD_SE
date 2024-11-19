function Person(name, age, gender) { 
    this.name = name; 
    this.age = age; 
    this.gender = gender;
} 
const person1 = new Person('James Brown', 73, 'male') 
console.log('person1: '+person1) //prints person1: [object Object]


// Q7a) Define a custom toString method for the Person object that will format and print their details
Person.prototype.toString = function(){
    console.log(`Name : ${this.name}, Age : ${this.age}, Gender : ${this.gender}`)
}

person1.toString();

// Q7b) Test your method by creating 2 different people using the below constructor function and printing them
const person2 = new Person('Celine Dion', 88, 'female') 
person2.toString();

// Q7c) Create a new constructor function Student that uses call to inherit from Person and add an extra property cohort
function Student(name, age, gender){
    Person.call(this,name, age, gender);//make Student inherit all of Person properties
    this.cohort=2024;
}