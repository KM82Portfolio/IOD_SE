// Exercise 1: Basic Class Creation
// Objective: Create a simple Person class with properties and methods.
// Create a class named Person.
// The class should have properties name and age, which should be passed in via the constructor.
// Add a method greet that logs "Hello, my name is [name] and I am [age] years old.".
// Create an instance of Person with the name "Alice" and age 30. Call the greet method.
// Bonus: Add a birthday method that increments the age by 1 and logs a message saying "Happy Birthday! You are now [age] years old.".

class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    greet(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
    birthday(){
        this.age+=1;
        console.log(`Happy Birthday! You are now ${this.age} years old.`);
    }
}

const Alice = new Person("Alice",30);
Alice.greet();

// Exercise 2: Extending Classes
// Objective: Create a subclass and override a method.
// Create a class Animal with a property name and a method makeSound() that logs "Some generic sound".
// Create a subclass Dog that extends Animal:
// Override makeSound() in Dog to log "Woof!".
// Create an instance of Dog named "Buddy" and call makeSound() on it.
// Bonus: Add a new method fetch() to Dog that logs "Buddy is fetching the ball!".

class Animal{

    constructor(name){
        this.name=name;
    }

    makeSound(){
        console.log(`Some generic sound`);
    }

}

class Dog extends Animal{

    makeSound(){
        super.makeSound();//Only add this if you want to use the parent class method
        console.log(`Woof!`);
    }

    fetch(){
        console.log(`${this.name} is fetching the ball!`);
    }

}

const Buddy = new Dog('Buddy');
Buddy.makeSound();
Buddy.fetch();

// Exercise 3: Static Methods and Properties
// Objective: Practice using static methods and properties.
// Create a class Calculator with a static method add(a, b) that returns the sum of a and b.
// Add another static method multiply(a, b) that returns the product of a and b.
// Call the static methods without creating an instance and log the results.
// Bonus: Add a static property operations that keeps track of the number of times add and multiply are called. Update this counter in each method.

class Calculator{

    constructor(){}//optional, constructor function will be created by default anyway.

    static add(a, b){
        return a+b;
    }

    static multiply(a, b){
        return a*b;
    }
}

// static methods can be used without creating an object from the class 1st
console.log(Calculator.add(1,2));
console.log(Calculator.multiply(8,2)) ;