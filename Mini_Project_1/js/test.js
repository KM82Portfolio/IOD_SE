nD = new Date();
console.log(`${nD}`);

function getDate(){
    let todaydate = new Date();
    let day = todaydate.getDate();
    let month = todaydate.getMonth() + 1;
    let year = todaydate.getFullYear();
    let time = todaydate.toLocaleTimeString();
    return datestring = day + "/" + month + "/" + year+"/"+time;
} 
console.log(getDate());

testArr = [];
let d = getDate()
let i=0
newRow1=[]
newRow1[0]=d;
newRow1[1]=1;
newRow1[2]=2;
newRow1[3]="three";
testArr.push(newRow1)
console.log(testArr);
let j=1
newRow2=[]
newRow2[0]=d;
newRow2[1]=1;
newRow2[2]=2;
newRow2[3]="three";
testArr.push(newRow2)
console.log(testArr);

//How to remove row in 2d array in javascript
//https://stackoverflow.com/questions/29070924/how-to-remove-row-in-2d-array-in-javascript