//Automated function tester

function sum(a,b){
    return a+b;
}
function subtract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    return a/b;
}
function printName(name){
    console.log("Hello ",name);
}

function sumTester(numtests){
    
    console.log("Testing sum() function");
    
    for(let i=0;i<numtests;i++){
        
        alpha = sum(i,i+1);
        beta = i + (i+1);
        console.log("Pass condition for this test is ",beta);

        if(alpha!=beta){
            console.log("Test failed for sum(",i,",",i+1,")");
        } else {
            console.log("Test passed for sum(",i,",",i+1,")");
        }
    }
    
}

function subtractTester(numtests){
    
    console.log("Testing subtract() function");
    
    for(let i=0;i<numtests;i++){
        
        alpha = subtract(i+1,i);
        beta = (i+1)-i  ;
        console.log("Pass condition for this test is ",beta);

        if(alpha!=beta){
            console.log("Test failed for subtract(",i+1,",",i,")");
        } else {
            console.log("Test passed for subtract(",i+1,",",i,")");
        }
    }
    
}

function multiplyTester(numtests){
    
    console.log("Testing subtract() function");
    
    for(let i=0;i<numtests;i++){
        
        alpha = multiply(i,i+1);
        beta = i*(i+1)  ;
        console.log("Pass condition for this test is ",beta);

        if(alpha!=beta){
            console.log("Test failed for multiply(",i,",",i+1,")");
        } else {
            console.log("Test passed for multiply(",i,",",i+1,")");
        }
    }
    
}

function divideTester(numtests){
    
    console.log("Testing subtract() function");
    
    for(let i=0;i<numtests;i++){
        
        alpha = divide(i,i+1);
        beta = i/(i+1)   ;
        console.log("Pass condition for this test is ",beta);

        if(alpha!=beta){
            console.log("Test failed for divide(",i,",",i+1,")");
        } else {
            console.log("Test passed for divide(",i,",",i+1,")");
        }
    }
    
}

sumTester(3);
subtractTester(3);
multiplyTester(3);
divideTester(3);