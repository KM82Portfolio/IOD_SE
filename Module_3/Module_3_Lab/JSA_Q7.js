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