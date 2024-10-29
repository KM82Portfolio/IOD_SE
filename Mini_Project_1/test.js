// extract value of a specific key from an array of objects with that key
function extractValue(arr, prop) {
    let extractedValue = arr.map(item => item[prop]);
    return extractedValue;
}

const objArray = [{a: 1, b: 2}, {a: 4, b: 5}, {a: 8, b: 9}];

// passing an array of objects and property 'a' to extract
const result = extractValue(objArray, 'a');
console.log(result);

function attackInterval(delay,limit){

    let c = 0

    let intervalTimer = setInterval(()=>{
            if(c==0) {console.log('Attack Starts!');}
            console.log(Math.random());
            console.log('Attacking again!')
            if(c==limit){ 
                console.log('Stopping Attack');
                clearInterval(intervalTimer);
            }
            c++;
        },
        delay
    );
}
attackInterval(1000,5);