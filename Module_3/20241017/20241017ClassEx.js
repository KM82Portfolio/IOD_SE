//Task: Given the following JavaScript object, convert it into a JSON string using JSON.stringify():
const student = {
    name: 'Emily',
    age: 22,
    subjects: ['Math', 'Science', 'English'],
    isGraduated: false
};
const studentString = JSON.stringify(student);
console.log(`Task: Given the following JavaScript object, convert it into a JSON string using JSON.stringify(): 
${studentString}`);
//Question: After converting, what is the type of the resulting studentJSON?
console.log(`Question: After converting, what is the type of the resulting studentJSON? 
${typeof studentString}`);

//2. Task: Convert the following JSON string back into a JavaScript object using JSON.parse():
const carJSON = '{"make": "Tesla", "model": "Model X", "year": 2022}';
const carObj=JSON.parse(carJSON);
console.log("Task: Convert the following JSON string back into a JavaScript object using JSON.parse():\n",carObj);
//Bonus: Access and print the car's make and model from the resulting object.

//3. Task: The following objects reference each other, which causes issues with JSON.stringify(). Write code to prevent the circular reference from throwing an error:
const room = { number: 101 };
const meeting = { title: 'Project Sync', participants: ['Alice', 'Bob'] };
room.meeting = meeting;
meeting.place = room;

console.log( JSON.stringify(meeting, function(key, value) {
        if (key != '' && value == meeting) return undefined // skip references to current object
        else if (typeof value == 'function') return value.toString() // stringify functions
        return value // otherwise return original value unchanged
        }, 
    2) 
); // use 2 spaces for nicer formatting

//4. Task: Use JSON.stringify() and JSON.parse() to create a deep copy of the following nested object:
const originalBox = {
    size: 'large',
    dimensions: {
        width: 100,
        height: 50
    },
    contents: ['books', 'clothes', 'toys']
};
// Bonus: Modify the deepBoxBox and verify that the changes do not affect the original object.
const deepBox = JSON.parse(JSON.stringify(originalBox));
deepBox.dimensions.width = 50;
console.log(originalBox, deepBox);

console.log(`
CLOSURE FUNCTION DEMO
=====================
`)

console.log(`
Changing Private Variable
=========================
`)

function secretMessage() {
    let secret = "This is a secret!";

    return {
        revealSecret: function () {
            console.log(secret);
        },
        changeSecret: function (newSecret) {
            secret = newSecret;
        },
    };
}

let mySecret = secretMessage();
mySecret.revealSecret();
mySecret.changeSecret("New secret!");
mySecret.revealSecret();

console.log(`
Recursive Countdown Timer
=========================
`)
function createCountdown(start) {
    return function () {
        if (start > 0) {
            console.log(start);
            start--;
        } else {
            console.log(`Time's up!
            `);
        }
    };
}

let countdown = createCountdown(5);
countdown();
countdown();
countdown();
countdown();
countdown();
countdown();

console.log(`
Recursive Factorial Demo
`)
function factorial(x) {
    if (x < 0) throw Error("Cannot calculate factorial of a negative number");
    function cycle(i, one) {
      return i === 0 ? one : cycle(i-1, i*one);
    }
    return cycle(x, 1);
}

console.log(`${factorial(6)}
`); // 720


console.log(`
Use Deconstruction ... to sum array where we dunno length before writing function
`)
function add(...rest) {
return rest.reduce(function (acc, val) {
        return acc + val;
    }, 0);
}

console.log(add(1, 2, 4, 5, 6, 7,8));