const a = "123";
console.log(parseInt(a));
console.log(typeof parseInt(a));

const b = "text";
console.log(parseInt(b));
console.log(typeof parseInt(b)); //NaN is an enumeration?

//testing class exercise work using lodash  
var _ = require('lodash'); 
c = ["123","456"];
d = _.map(c,x=>parseInt(x)); 
for(let i=0;i<d.length;i++){
    console.log(d[i],typeof d);
}

/*
console.log(typeof undefined); // undefined
console.log(typeof 0); // number
console.log(typeof 10n); // bigint
console.log(typeof true); // boolean
console.log(typeof 'text'); // string
console.log(typeof Symbol('id')) // symbol
console.log(typeof Math); // object
console.log(typeof null); // object
console.log(typeof console.log); //
*/ 