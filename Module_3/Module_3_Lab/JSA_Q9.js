// Q9a) Create a promise-based alternative randomDelay() that delays execution for a random amount of time (between 1 and 20 seconds) 
// and returns a promise we can use via .then(), as in the starter code below
function randomDelay() { 
    
    let randomDelayDuration = (Math.random()*(20-1)+1)*1000; //delays execution for a random amount of time (between 1 and 20 seconds)

    const promiseObj = new Promise((resolve,reject)=>
        setTimeout(()=>{
            if(randomDelayDuration > 10) {
                console.log(`setTimeout to random delay duration of ${randomDelayDuration} ms for RESOLVE condition`);
                resolve(randomDelayDuration);
            }
            else if(randomDelayDuration<=10) {
                console.log(`setTimeout to random delay duration of ${randomDelayDuration} ms for REJECT condition`);
                reject(randomDelayDuration);
            }
        },randomDelayDuration)
    )

    return promiseObj;

} 

randomDelay()
    .then((anything)=>console.log(`Random delay duration of ${anything} ms triggered`))
    .catch((anything)=>console.log(`Random delay duration of ${anything} ms triggered`));