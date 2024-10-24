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