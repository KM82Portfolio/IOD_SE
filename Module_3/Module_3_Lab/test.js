date = new Date();
wakeupTime = new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: 'numeric', 
    hour12: false
}).format(date);

console.log(wakeupTime);