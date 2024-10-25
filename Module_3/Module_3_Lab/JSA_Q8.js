class DigitalClock { 
    
    constructor(prefix) { this.prefix = prefix; } 

    display() { 
        let date = new Date(); //create 3 variables in one go using array destructuring 
        let [hours, mins, secs] = [date.getHours(), date.getMinutes(), date.getSeconds()]; 
        if (hours < 10) {hours = '0' + hours;} 
        if (mins < 10) {mins = '0' + mins;} 
        if (secs < 10) {secs = '0' + secs;} 
        console.log(`${this.prefix} ${hours}:${mins}:${secs}`); 
        return [hours, mins, secs]
    } 

    stop() { clearInterval(this.timer); } 

    start() { 
        this.display(); 
        this.timer = setInterval(() => this.display(), 1000);
    }
     
} 
const myClock = new DigitalClock('my clock:') 
myClock.start()

// Q8a) Create a new class PrecisionClock that inherits from DigitalClock and adds the parameter precision – the number of ms between 'ticks'. 
// This precision parameter should default to 1 second if not supplied.

class PrecisionClock extends DigitalClock{
    precision = 1; // This precision parameter should default to 1 second if not supplied.
}

// Q8b) Create a new class AlarmClock that inherits from DigitalClock and adds the parameter wakeupTime in the format hh:mm. 
// When the clock reaches this time, it should print a 'Wake Up' message and stop ticking. 
// This wakeupTime parameter should default to 07:00 if not supplied.
class AlarmClock extends DigitalClock{
    
    constructor(prefix,wakeupTime){
        super(prefix);
        this.wakeupTime = wakeupTime;
    }
    //conver wakeupTime to string & compare with [hours, mins, secs] from display(), do tomorrow

}

let AC = new AlarmClock('whatever',);
AC.wakeupTime;