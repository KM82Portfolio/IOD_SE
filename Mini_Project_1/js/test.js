nD = new Date();
console.log(`${nD}`);

function getDate(){
    let todaydate = new Date();
    let day = todaydate.getDate();
    let month = todaydate.getMonth() + 1;
    let year = todaydate.getFullYear();
    return datestring = day + "/" + month + "/" + year;
} 
console.log(getDate());