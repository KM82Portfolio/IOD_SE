function multiply(a, b) { console.log( a * b ); } 

Function.prototype.multiply=function(a,b,delay) {
    return setTimeout((a,b)=>{console.log( a * b );},delay)
}
multiply.delay(5, 5,500); // prints 25 after 500 milliseconds