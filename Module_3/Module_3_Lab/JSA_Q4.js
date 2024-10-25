console.log(`
Q4
==
`)

console.log(`
Q4a & c) Write a function printFibonacci() using setInterval that outputs a number in the Fibonacci sequence every second.
`)
function calculateFibonacci(n) {
    if (n <= 1) return n;
    return calculateFibonacci(n - 1) + calculateFibonacci(n - 2);
}

function printFibonacci(interval, limit)
{
    let counter = 1; // part of the outer environment record for repeatInterval
    
    //Must define variable to assign setInterval() to, or clearInterval(), within setInterval(), will have nothing to call
    let intervalFib = setInterval(function repeatThis() {
        let fibOutput = calculateFibonacci(counter);
        console.log('Fib Output : '+fibOutput);
        if (counter == limit) clearInterval(intervalFib); // cancel interval after execution limit
        counter++; 
    }, interval); // delay is milliseconds between intervals
}

printFibonacci(1000,10);//Print incrementing Fib output every second for 30 seconds

console.log(`
Q4b & c) Write a new version printFibonacciTimeouts() that uses nested setTimeout calls to do the same thing
`)
function printFibsetTimeout(delay, limit)
{
    let counter = 1;
    // Outer loop setTimeout only called once, the nested setTimeout() is what repeats based on condition 
    setTimeout(function nestedsetTimeoutRepeater(counter) { // named function, so nested setTimeout() can call it recursively
            let fibOutput = calculateFibonacci(counter);
            console.log('Nested Timeout Fib Output : '+fibOutput);
            // we do need to call setTimeout recursively so that it repeats executing the function
            if (counter < limit) setTimeout(nestedsetTimeoutRepeater, delay, counter+1) // repeat if limit not reached
        }, delay, counter
    );//counter must be an arg of outer setTimeout()
}

printFibsetTimeout(1000, 10); // make the timeout repeat every second for a max of 10 times