let twentyCents = 0.20 
let tenCents = 0.10 

console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`)

let fixedTwenty = twentyCents.toFixed(2); 
let fixedTen = tenCents.toFixed(2); 

console.log(fixedTwenty + fixedTen) //why is this not working?

// Q5a just toFixed() the answer after addition?
let fT = twentyCents + tenCents
let fixedThirty = fT.toFixed(2);
console.log(fixedThirty) //why is this not working?

function currencyAddition(float1, float2){
    let preAns =float1 + float2
    return preAns.toFixed(2);
}
console.log(currencyAddition(123.423423424,123.534345345))

function currencyOperation(float1, float2, operation, numDecimals){
    if(typeof float1==Number && typeof float2==Number){ //prevent string addition problems
        switch(operation){
            case '+':
                let plus = float1 + float2;
                return plus.toFixed(numDecimals);
                break;
            case '-':
                let minus float1 - float2;
                return minus.toFixed(numDecimals);
                break;
            case '/':
                let divide = float1 / float2;
                return divide.toFixed(numDecimals);
                break;
            case '*':
                let multiply = float1 * float2;
                return multiply.toFixed(numDecimals);
                break;
            default:
                console.log(`Check operator selected`)//if caller sends something apart from the above 4 operators
        }
    }else{console.log(`Check number data types & try again`)}
}
console.log(currencyAddition(123.123123123,123.123123123,'+'))