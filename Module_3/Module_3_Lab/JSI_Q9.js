// Q9a) Write a function sumSalaries(salaries) that calculates and returns the total of all salaries
let salaries = { "Timothy" : 35000, "David" : 25000, "Mary" : 55000, "Christina" : 75000, "James" : 43000 };

function sumSalaries(salaries){
    let runningTotal=0;
    for([k,v] of Object.entries(salaries)){
        runningTotal+=v
    }
    return runningTotal;
}
console.log(sumSalaries(salaries))

// Q9b) Write a function topEarner(salaries) that calculates and returns the name of the person earning the highest salary
function topEarner(salaries){
    let sortedBySalaries = Object.entries(salaries).sort( ([,sal1],[,sal2])=>sal2-sal1 ) //for [,sal1],[,sal2], note sal2-sal1 condition for sort descending 
    console.log(`Person with highest salary is ${sortedBySalaries[0][0]} earning ${sortedBySalaries[0][1]}`) //sort returns array, thus this
}
topEarner(salaries)
// let sortedSalaries = topEarner(salaries)
// console.log(sortedSalaries)