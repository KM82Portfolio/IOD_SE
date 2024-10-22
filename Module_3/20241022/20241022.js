//Class Exercise 1 : Alien Invaders
/*
Part 1: Countdown to Invasion (setTimeout)
Create a countdown to an invasion happening in a city. The city will be invaded if the countdown reaches 0. Use setTimeout to simulate the countdown.
Instructions:
Write a function startInvasion(city, delay) that takes two parameters:
city: the name of the city to be invaded.
delay: the time (in milliseconds) until the invasion happens.
Inside the function, use setTimeout to log a message like "The aliens have invaded [city]!" after the delay.
*/
function startInvasion(city, delay){
    const invasionTimer = setTimeout(
            ()=>{
                    console.log(`The aliens have invaded ${city}`);
        },
        delay
    )
    return invasionTimer;
}
//startInvasion('NY',3333);//3.333 second delay

/*
Part 2: Stopping the Invasion (clearTimeout)
Now, we want to stop the invasion before it happens! Use clearTimeout to stop the invasion countdown.
Instructions:
Add a button or a command (for example, in a prompt or in the browser console) to cancel the invasion if pressed before the setTimeout completes.
Store the setTimeout in a variable, and use clearTimeout to cancel it.
*/
function closePortal(invasionTimer){
    clearTimeout(invasionTimer);
    console.log(`Portal Shut : Invasion Cancelled`);
}
setTimeout(closePortal,3000,startInvasion('NY', 3333));

/*
Part 3: Regular Alien Attacks (setInterval and clearInterval)
Now, the aliens are attacking repeatedly! Use setInterval to simulate recurring attacks every few seconds. The challenge is to stop the recurring attacks after a certain time.
Instructions:
Write a function startAttacks(city, interval) that starts an attack on a city at regular intervals.
Use setInterval to log a message like "The aliens are attacking [city] again!" every interval milliseconds.
Use clearInterval to stop the attacks after a certain number of intervals.
*/
/*
let count=0;
function intervalAttack(){
    console.log(`Attacking Now!`);
}
setInterval(intervalAttack,1000);

function repeatInterval(delay, limit){
    let counter = 1; // part of the outer environment record for repeatInterval
    // intervalTimer is a reference to interval, to allow it to be cancelled
    let intervalTimer = setInterval(function repeatThis() {
        console.log('The aliens are attacking '+counter+' of '+limit+' times');
        if (counter == limit) clearInterval(intervalTimer); // cancel interval after execution limit
        counter++; // keep track of how many times the interval has executed, in outer environment
    }, delay); // delay is milliseconds between intervals
}
repeatInterval(2000, 10); // make the interval repeat every 2 seconds for a max of 10 times
*/
function attackInterval(delay,limit){

    let c = 0

    let intervalTimer = setInterval(function repeatAttack(){
            if(c==0) {console.log('Attack Starts!');}
            console.log('Attacking again!')
            if(c==limit){ clearInterval(intervalTimer);}
            c++;
        },
        delay
    );
}
attackInterval(1000,11);