const today = new Date(); 
console.log('Current time is ' + today.toLocaleTimeString()) 
console.log(today.getHours() + ' hours have passed so far today')

// Q10a) Print the total number of minutes that have passed so far today
console.log(today.getHours()*60 + today.getMinutes() + ' minutes have passed so far today')

// Q10b) Print the total number of seconds that have passed so far today
console.log(today.getHours()*3600 + today.getMinutes()*60 + today.getSeconds() + ' seconds have passed so far today')

// Q10c) Calculate and print your age as: 'I am x years, y months and z days old'
function calculateAge(dateArg){
    
    const currentDate = new Date() //cannot have this changing
    let ageYears = currentDate.getFullYear() -  dateArg.getFullYear()
    let ageMonths = currentDate.getMonth() -  dateArg.getMonth()
    let ageDays = currentDate.getDate() -  dateArg.getDate()

    // Handling current month & day being earlier than current month & year. Not a switch, both checks need to be evaluated
    if(ageDays<0) {
        ageMonths--; //not yet the full month to be added to date
        ageDays += new Date(currentDate.getMonth(),currentDate.getDate(),0).getDate() //number of days in previous month
    }
    if(ageMonths<0) {
        ageYears--; //not yet the full year to be added 
        ageMonths += 12 //add 12 months since I'm decrementing year
    }   

    return [ageYears,ageMonths,ageDays]
}
const birthDate = new Date('1988-11-11');
let [ageYears,ageMonths,ageDays] = calculateAge(birthDate)
console.log(`I am ${ageYears} years, ${ageMonths} months & ${ageDays} days old`);