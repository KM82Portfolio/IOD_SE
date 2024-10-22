console.log(`
Function Decorator Demo
=======================
`)

function printGreeting(name) { // simple undecorated function
    console.log('Hello, ' + name);
    }
printGreeting('Undecorated');

function loggingTimingDecorator(originalFunction) { // decorator takes a function as parameter
    
    return function (name) { // and returns that function with extra bits - timing/logging
        console.time('Function timer'); // start a timer
        console.log(`\nExecuting function ...`) // log a message
        const result = originalFunction(name); // execute the original function and store result
        console.timeEnd('Function timer'); // stop the timer
        return result; // return the result of running the original function
    }
}

// returns the original function WITH the timing/logging features included
const decoratedPrintGreeting = loggingTimingDecorator(printGreeting);
decoratedPrintGreeting('Decorated') // we can still call the decorated version in the same way

/*
Exercise 1: Basic Function Decorator - Logging User Actions
Goal: Learn how to create a simple decorator that logs function calls and their arguments.
Instructions:
Write a function decorator logAction that logs the name of the function being called and its arguments.
Apply this decorator to multiple functions that simulate user actions, like login and purchase.
8:34
Exercise 2: Timing Decorator - Measuring Function Execution Time
Goal: Learn how to create a decorator that measures the execution time of functions and applies it to different scenarios.
Instructions:
Create a decorator measureTime that records the start and end time of a function execution and logs the duration.
Apply it to a function that performs a heavy task, such as calculating a large Fibonacci number or running a loop.
*/

console.log(`
Function Decorator ClassEx
==========================
`)

function loginFn(loginid){
    console.log(`Logged in as ${loginid}`);
}
function purchaseFn(item){
    console.log(`Purchased ${item}`);
}

function logAction(originalFunction) { // decorator takes a function as parameter
    
    return function (name) { // and returns that function with extra bits - timing/logging
        
        const result = originalFunction(name); // execute the original function and store result
        console.log(`${originalFunction.name} was called`); // return function name that was called
        return result; // return the result of running the original function
    }
}
const loginWrapper = logAction(loginFn);
loginWrapper('Some Dude') // we can still call the decorated version in the same way 

const purchaseWrapper = logAction(purchaseFn);
purchaseWrapper('This Item')

function calculateFibonacci(n) {
    if (n <= 1) return n;
    return calculateFibonacci(n - 1) + calculateFibonacci(n - 2);
}

function measureTime(originalFunction) { // decorator takes a function as parameter
    
    return function (name) { // and returns that function with extra bits - timing/logging
        console.time('Function timer'); // start a timer
        console.log(`${originalFunction.name} was called`);
        const result = originalFunction(name); // execute the original function and store result
        console.timeEnd('Function timer'); // stop the timer
        return result; // return the result of running the original function
    }
}
const fibWrapper = measureTime(calculateFibonacci);
fibWrapper(12);

//Better way of measuring time
function measureTime1(originalFunction) { // decorator takes a function as parameter
    
    return function (name) { // and returns that function with extra bits - timing/logging
        const timeStart = Date.now()
        console.log(`${originalFunction.name} was called`);
        const result = originalFunction(name); // execute the original function and store result
        const timeEnd = Date.now()
        console.log(`${originalFunction.name} took ${timeEnd-timeStart} milliseconds to execute`)
        return result; // return the result of running the original function
    }
}
const fibWrapper1 = measureTime1(calculateFibonacci);
fibWrapper1(33);