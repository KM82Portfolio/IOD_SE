function randomDelay() { 
    
    let randomDelayDuration = (Math.random()*(20-1)+1)*1000; //delays execution for a random amount of time (between 1 and 20 seconds)

    const promiseObj = new Promise((resolve,reject)=>
        setTimeout(()=>{
            if(randomDelayDuration > 10) {resolve(randomDelayDuration)}
            else if(randomDelayDuration<=10) {reject(randomDelayDuration)}
        },randomDelayDuration)
    )

    return promiseObj;

} 

// randomDelayDuration = 5;
randomDelay()
    .then((randomDelayDuration)=>console.log(`Random delay duration of ${randomDelayDuration} ms triggered`))
    .catch((randomDelayDuration)=>console.log(`Random delay duration of ${randomDelayDuration} ms triggered`));
// randomDelay()
//     .then(randomDelayDuration)
//     .catch(randomDelayDuration);