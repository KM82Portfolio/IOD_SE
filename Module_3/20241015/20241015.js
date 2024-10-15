s1=new Set([1,1,2,3]);
console.log("Remove duplicates from a1 as ",s1);
a1=Array.from(s1);
console.log(`Remove duplicates from a1 as ${a1}`);

console.log(`
Exercise 1: Iterating through Iterables
=======================================

Task: Write a program to loop through the following iterable objects using a for..of loop:
`);

console.log(`
Set: const animalSet = new Set(['cat', 'dog', 'rabbit', 'turtle'])`);
const animalSet = new Set(['cat', 'dog', 'rabbit', 'turtle']);
const animalArray = Array.from(animalSet);
animalArray.forEach((e)=>console.log(e))    

console.log(`
Map: const animalMap = new Map([['bird', 'parrot'], ['fish', 'goldfish'], ['insect', 'bee']])`)
const animalMap = new Map([['bird', 'parrot'], ['fish', 'goldfish'], ['insect', 'bee']])
animalMap.forEach((i,e)=>console.log(i,",",e))

console.log(`What happens when you try to use for..of with a regular object?
Assuming question is asking non-iterable object. js returns error. 
`)

console.log(`How would you make an object iterable?
Convert to array by: 
1. Convert to string
1. Array.from()
`)
//
const animalsArr = ['tiger', 'lion', 'elephant', 'giraffe']


console.log(`
Exercise 2: Sets
================
`);

const classmates = new Set(['Alice', 'Bob', 'Charlie', 'Alice', 'Dave']);

//Check how many unique classmates you have using .size.
cu = new Set(classmates);
cul=Array.from(cu);
console.log("I have",cul.length," unique classmates");

//Add a new classmate to the Set.
cu.add('FNG');
console.log("Add a new classmate to the Set. ",cu);

//Check if 'Charlie' is in the Set.
console.log(`Check if 'Charlie' is in the Set. ${cu.has('Charlie')}`);

//Remove 'Alice' from the Set.
cu.delete('Alice');
console.log("Remove 'Alice' from the Set. ",cu);

//Bonus Task: Iterate through the Set using both for..of and forEach() to print each classmate.
cua = Array.from(cu);//convert Set to Array to allow use of forEach()
console.log(`Bonus Task: Iterate through the Set using both for..of and forEach() to print each classmate;`)
cua.forEach((e)=>console.log(e));

console.log(`
Destructuring assignment
============================
`)
//Task: Use destructuring to extract the first two colors from this array:
const colors = ['red', 'green', 'blue', 'yellow'];
const [col1,col2,col3,col4]=colors
console.log(`Task: Use destructuring to extract the first two colors from this array: ${col1} ${col2}`)

//Task: Use object destructuring to extract properties from the following object:
//Grab the value name and age from the object
const student = {
    name: 'John',
    age: 21,
    course: 'Computer Science',
    year: 2023
};
{let {name,age,course,year}=student;
console.log("Grab the value name and age from the object ",name, age);} //{} just for scoping let variables
{let {year,...allElse}=student;
console.log("Bonus: grab all the rest of the values from an object except year ",allElse);}

dtest=new Date('0001');
console.log(dtest);

let _ = require('lodash')
zzz = [
    {
        'k1': '1',
        'k2': 2,
        'k3': 3
    },
    {
        'k1': '4',
        'k2': 5,
        'k3': 6
    }
];
let z1 = _.filter(zzz,{'k1': '1'});
console.log(z1);
let z2 = _.filter(zzz,{'k1': 1});
console.log(z2);
/*
//Algorithmic Efficiency Demo
//============================

const obj = {
    one: 1,
    two: 2,
};

console.log(obj.one); // O(1)

const arr = [1, 2, 3, 4];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
} // O(n) n stands for the length of the array

const mat = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
];
for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
        console.log(mat[i][j]);
    }
} // O(n^2) n stands for the row and column assuming row and column are the same
//bigocheatsheet.com
*/