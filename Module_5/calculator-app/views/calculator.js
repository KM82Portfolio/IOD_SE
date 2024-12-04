let displayObj = document.querySelector('.display');

let numBtns = document.querySelectorAll('.num-btn'); //ensures we get all the num-btn obj as an iterable array
let opBtn = document.querySelectorAll(".opbtn"); 
// const fnBtns = document.querySelectorAll(".fn-btn-span-1,.fn-btn-span-2"); 

let prevInput='';
let currInput='';
let currOperation='';
let currOp = '';

// Front End Functions

function updateDisplay(currInput){
    if(currInput===''){return}; //We don't need this
    displayObj.innerText=currInput; 
}

function appendNumber(num){
    currInput+=num.toString();
    console.log('appendNumber ',currInput)
    updateDisplay(currInput);
}

numBtns.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        console.log('Target =  ',e);
        appendNumber(e.target.innerText);
    })
})

function recordOperation(e){//when operator button clicked after 1st number entered
    if(currInput===''){return} //back to default state
    currOp = e.target.innerText;
    console.log(currOp);
    prevInput = currInput;
    currInput='';
}

opBtn.forEach((btn)=>{
    btn.addEventListener('click',recordOperation)
})

function clearAll(){
    currOp = '';
    prevInput = '';
    currInput = '';
    updateDisplay("0");
}

async function calculate(){

    let result;
    let prevNum = parseInt(prevInput);
    let currNum = parseInt(currInput);

    switch(currOp){
        case "+":
            response = await fetch('http://localhost:5000/add',{
                method:"POST",
                headers:{
                    "Content-type":"application/json"
                },
                body:JSON.stringify({
                    num1:prevNum,
                    num2:currNum
                })

            }) 
            data = await response.json()
            console.log(data)
            result = data.result
            console.log(result)
            break;
        case '-':
            result = prevNum - currNum;
            break;
        case 'x':
            // response = await fetch(`http://localhost:5000/multiply/${prevNum}/${currNum}`) //sending data as parameters
            response = await fetch(`http://localhost:5000/multiply?num1=${prevNum}&num2=${currNum}`) //sending data as query parameters
            break;
        case '/':
            result = prevNum / currNum;
            break;
    }

    currOp = '';
    prevInput = '';
    currInput = result;//in case we want to perform another operation immediately after
    updateDisplay(result);
    
}