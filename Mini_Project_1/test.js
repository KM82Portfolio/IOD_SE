// extract value of a specific key from an array of objects with that key
function extractValue(arr, prop) {
    let extractedValue = arr.map(item => item[prop]);
    return extractedValue;
}

const objArray = [{a: 1, b: 2}, {a: 4, b: 5}, {a: 8, b: 9}];

// passing an array of objects and property 'a' to extract
const result = extractValue(objArray, 'a');
console.log(result);

function changeCurrency(delay,limit){

    let c = 0

    let intervalTimer = setInterval(()=>{
            if(c==0) {
                $('#test_area11').html('Extracting Currency;');
            }
            if(c==limit){ 
                $('#test_area11').html('');
                clearInterval(intervalTimer);
            }
            c++;
        },
        delay
    );
}
changeCurrency(200,5);