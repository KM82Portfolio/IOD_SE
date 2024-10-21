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

let jData = [
    { name: "GeeksforGeeks", est: 2009 },
    { name: "Google", est: 1998 },
    { name: "Microsoft", est: 1975 }
];
console.log(jData)
let res = jData.reduce((acc, curr) => {
    let ind = acc.findIndex((item) => item.est > curr.est);
    if (ind     === -1) ind = acc.length;
    acc.splice(ind, 0, curr);
    return acc;
}, []);
console.log(res);

var transactionTable = '{"transactionTable":[]}'
var parse_obj = JSON.parse(transactionTable);
parse_obj['transactionTable'].push({"teamId":"4","status":"pending"});
transactionTable = JSON.stringify(parse_obj);
console.log(transactionTable);