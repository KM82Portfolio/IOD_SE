// Q9a) Create a promise-based alternative randomDelay() that delays execution for a random amount of time (between 1 and 20 seconds) 
// and returns a promise we can use via .then(), as in the starter code below
function randomDelay() { 
    
    let randomDelayDuration = (Math.random()*(20-1)+1)*1000; //delays execution for a random amount of time (between 1 and 20 seconds)

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(randomDelayDuration > 10) {
                resolve(randomDelayDuration);
            }
            else {
                reject(randomDelayDuration);
            }
        },randomDelayDuration)
    });

} 

randomDelay()
    .then((response)=>console.log(`Random delay duration of ${response/1000} ms triggered`))
    .catch((response)=>console.log(`Random delay duration of ${response/1000} ms triggered`));