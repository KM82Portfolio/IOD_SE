const today = new Date(); 
console.log('Current time is ' + today.toLocaleTimeString()) 
console.log(today.getHours() + ' hours have passed so far today')

// Q10a) Print the total number of minutes that have passed so far today
console.log(today.getHours()*60 + today.getMinutes() + ' minutes have passed so far today')

// Q10b) Print the total number of seconds that have passed so far today
console.log(today.getHours()*3600 + today.getMinutes()*60 + today.getSeconds() + ' seconds have passed so far today')

// Q10c) Calculate and print your age as: 'I am x years, y months and z days old'