console.log(`
Q1
==
`)
// Q1
function makeCounter() { 
  let currentCount = 0; 
  return function() { 
    currentCount++; 
    console.log(currentCount) 
    return currentCount;
  }; 
} 
//Q1a Create a second counter counter2 using the makeCounter function and test to see if it remains independent to counter1
let counter1 = makeCounter(); 
let counter2 = makeCounter(); 
counter1(); // 1 
counter2();
counter1();// 2
counter2();
//Alternating should show 1, 1, 2, 2 : Proves independence?

console.log(`
Q2
==
`)
// Q2
function delayMsg(msg) { 
  console.log(`This message will be printed after a delay: ${msg}`) 
} 
setTimeout(delayMsg, 100, '#1: Delayed by 100ms'); 
setTimeout(delayMsg, 20, '#2: Delayed by 20ms'); 
setTimeout(delayMsg, 0, '#3: Delayed by 0ms'); 
delayMsg('#4: Not delayed at all')

console.log(`
Q3
==
`)
//Q3a & 3b
function printMe() { console.log('printing debounced message') }

function debounce(originalFunction, delay) {
    let timeout;
    return function() {
      clearTimeout(timeout);
      timeout = setTimeout(originalFunction, delay);
    };
}

let printMeDebounced = debounce(printMe, 1000); //create this debounce function for a)

//fire off 3 calls to printMe within 300ms - only the LAST one should print, after 1000ms of no calls
setTimeout( printMeDebounced, 100); 
setTimeout( printMeDebounced, 200); 
setTimeout( printMeDebounced, 300);

/*
//Q3c
function printMe3C(msg) { console.log(`printing debounced message ${msg}`) }

function debounce3C(originalFunction, delay) {
    let timeout;
    return function() {
      clearTimeout(timeout);
      timeout = setTimeout(() => originalFunction.apply(this, arguments), delay);
    };
}

let printMeDebounced3C = debounce3C(printMe3C, 1000); //create this debounce function for a)

//fire off 3 calls to printMe within 300ms - only the LAST one should print, after 1000ms of no calls
setTimeout( printMeDebounced3C(100), 100); 
setTimeout( printMeDebounced3C(200), 200); 
setTimeout( printMeDebounced3C(300), 300);
*/

