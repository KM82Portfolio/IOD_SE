/*
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

//dump from form.html This Works!
     
    //create string of new transaction object
    let tt1='"transactionDate":"'+localStorage.getItem("transactionDate")+'"';
    let tt2='"ddlselectType":"'+localStorage.getItem("ddlselectType")+'"';;
    let tt3='"ddlselectCategory":"'+localStorage.getItem("ddlselectCategory")+'"';;
    let tt4='"Amount":"'+localStorage.getItem("Amount")+'"';    
    newTransaction= "{"+tt1+","+tt2+","+tt3+","+tt4+"}";

    document.getElementById('test_area4').innerHTML=newTransaction + " 1"//test
    
    //push new transaction object into existing transactionTable
    let transactionTable = localStorage.getItem('transactionTable');
    let parse_obj = JSON.parse(transactionTable);
    parse_obj['transactionTable'].push(newTransaction);
    transactionTable = JSON.stringify(parse_obj);
    localStorage.setItem("transactionTable", transactionTable);

    document.getElementById('test_area5').innerHTML=transactionTable + " 2";//test

    let tT = localStorage.getItem('transactionTable');

    document.getElementById('test_area6').innerHTML=JSON.parse(tT) + " 3";//test

}
*/
//var jsonStr = '{"theTeam":[{"teamId":"1","status":"pending"},{"teamId":"2","status":"member"},{"teamId":"3","status":"member"}]}';
var jsonStr = '{"theTeam":[]}';
console.log(jsonStr)
var obj = JSON.parse(jsonStr);
obj['theTeam'].push({"teamId":"4","status":"pending"});
jsonStr = JSON.stringify(obj);
console.log(jsonStr)
jsonParsed=JSON.parse(jsonStr);
console.log(jsonParsed['theTeam']);
console.log(jsonParsed[0]);

function runningBalance(latestUpdate){
    return function Adder(penultimate){
        return penultimate+latestUpdate;
    };
}
const add5 = runningBalance(5); // sets x to 5, even when adder function is returned and called
console.log( add5(10) ) // x is still 5 and y is 10, result is 15