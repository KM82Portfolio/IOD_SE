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
Q2a : Tests will print in the following order as specified by delay, 1st directly calls delayMsg() so no delay:
'#4: Not delayed at all'
'#3: Delayed by 0ms'
'#2: Delayed by 20ms'
'#1: Delayed by 100ms'
`)

console.log(`
Q2b) Rewrite delayMsg as an arrow function
`)
let delayMsgArrow = (msg)=> {return `This message will be printed after a delay: ${msg}`} //don't forget to return!
console.log(delayMsgArrow('Arrowed'))

console.log(`
Q2c) Add a fifth test which uses a large delay time (greater than 10 seconds)
`)
setTimeout(delayMsg, 11000, '#11: Delayed by 11000ms'); 
setTimeout(delayMsg, 100, '#1: Delayed by 100ms'); 
setTimeout(delayMsg, 20, '#2: Delayed by 20ms'); 
setTimeout(delayMsg, 0, '#3: Delayed by 0ms'); 
delayMsg('#4: Not delayed at all')

console.log(`
Q2d) Use clearTimeout to prevent the fifth test from printing at all.
`)

let sT15k = setTimeout(delayMsg, 15000, '#15: Delayed by 15000ms, & #12 has not printed to confirm clearTimeout works'); 
let sT11k = setTimeout(delayMsg, 11000, '#12: Delayed by 11000ms'); 
let sT01k = setTimeout(delayMsg, 100, '#1: Delayed by 100ms'); 
let sT002k = setTimeout(delayMsg, 20, '#2: Delayed by 20ms'); 
let sT0k = setTimeout(delayMsg, 0, '#3: Delayed by 0ms'); 
let sT = delayMsg('#4: Not delayed at all')
clearTimeout(sT11k,10000) // clear timeout 1 sec before 5th test, note the #11 & #12 identifeier