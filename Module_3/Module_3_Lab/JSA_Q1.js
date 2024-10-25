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