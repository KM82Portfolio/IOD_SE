function writeSomething(){
    nD = new Date();
    document.getElementById('txtDate')[0].value="TEST TEST TEST";
}

function getDate(){
    let todaydate = new Date();
    let day = todaydate.getDate();
    let month = todaydate.getMonth() + 1;
    let year = todaydate.getFullYear();
    let datestring = day + "/" + month + "/" + year;
    document.getElementById('testSpan').innerHTML=datestring;
} 
/*
var date = new Date();
document.getElementById("demo").value = (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();
*/
/*

function getDate(){
    let todaydate = new Date();
    let day = todaydate.getDate();
    let month = todaydate.getMonth() + 1;
    let year = todaydate.getFullYear();
    return datestring = day + "/" + month + "/" + year;
} 
*/

/*
function getDate(){
    var todaydate = new Date();
    var day = todaydate.getDate();
    var month = todaydate.getMonth() + 1;
    var year = todaydate.getFullYear();
    var datestring = day + "/" + month + "/" + year;
    document.getElementById("txtDate").value = datestring;
   } 
 getDate(); 
*/