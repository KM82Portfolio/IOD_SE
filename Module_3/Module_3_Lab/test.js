date = new Date();
wakeupTime = new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: 'numeric', 
    hour12: false
}).format(date);

console.log(wakeupTime);

 const rightNow = new Date()
 console.log(rightNow)
 console.log(rightNow.getFullYear())
 console.log(rightNow.getMonth())
const newDateDays = new Date(rightNow.getFullYear(),rightNow.getMonth(),0).getDate()
console.log(newDateDays)
const testDate = new Date(rightNow.getFullYear(),rightNow.getMonth(),0)
console.log(testDate)
console.log(`
`)
const daysMonthBefore = (y, m) => new Date(y, m, 0);
daysMonthBefore(rightNow.getFullYear(), rightNow.getMonth());

const printThis = (msg)=>{console.log(msg)}
printThis('TEST MESSAGE')