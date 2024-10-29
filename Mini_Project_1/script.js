let transactionArray = [];
let runningTotal = 0;

$(document).ready(function() {
    // Clear localStorage and initialize the application
    localStorage.clear(); 
    updateRunningTotalDisplay();
    createChart(); //create empty transaction Chart
    createCategoryChart(); //create empty category Chart
});

// Change Category options available based on Type selection
$('#ddlselectType').change(function() {
    // Update category dropdown based on selection
    let sel = $(this).val();
    if (sel == "Income") {
        $('#ddlselectCategory').html(
            "<option>Select Category</option><option value='Salary'>Salary</option>"
        );
    } else if (sel == "Expense") {
        $('#ddlselectCategory').html(
            "<option>Select Category</option><option value='Food'>Food</option><option value='Rent'>Rent</option><option value='Entertainment'>Entertainment</option>"
        );
    }
});

// Push everything recorded in form to transactionArray
$('#btnUpdTbl').click(logTransaction);

// Push Transaction into transactionArray Array
function logTransaction() {
    
    let date = $('#transactionDatePicker').val();
    let type = $('#ddlselectType').val();
    let category = $('#ddlselectCategory').val();
    let amount = Number($('#transactionAmount').val());

    if (type && category && amount > 0) {
        let transaction = {
            date: date,
            type: type,
            category: category,
            amount: type === 'Expense' ? -amount : amount
        };

        transactionArray.push(transaction);
        updateArray();
        updateTable();
        updateRunningTotal();
        updateChart(); // Update chart after adding a transaction
        updateCatChart();
        $('#transactionAmount').val('');    
        transactionArrayStringified = JSON.stringify(transactionArray)
        $('#test_area11').html(transactionArrayStringified); 
        // $('#test_area11').html('TEST TEST TEST'); 
        console.log('TEST TEST TEST');
    } 
}

// Update the transaction table
function updateTable() {
    let tbody = $('#transactionTable tbody');
    tbody.empty(); 

    transactionArray.forEach((transaction, index) => {
        let row = `<tr>
            <td>${transaction.date}</td>
            <td>${transaction.type}</td>
            <td>${transaction.category}</td>
            <td>${transaction.amount}</td>
            <td><button onclick="deleteTransaction(${index})">Delete</button></td>
        </tr>`;
        tbody.append(row);
    });
}

// Running total
function updateRunningTotal() {
    runningTotal = transactionArray.reduce((total, t) => total + t.amount, 0);
    localStorage.setItem("runningTotal", runningTotal);
    updateRunningTotalDisplay();
}

// Display running total
function updateRunningTotalDisplay() {
    $('#runningTotal').text(runningTotal);
}

// Delete transaction
function deleteTransaction(index) {
    transactionArray.splice(index, 1);
    updateArray();
    updateTable();
    updateRunningTotal();
    updateChart(); 
}

// Update the transaction array in localStorage as JSON
function updateJSON() {
    const jsonString = JSON.stringify(transactionArray);
    localStorage.setItem('transactions', jsonString); 
}

// Update the transaction array and refresh the UI
function updateArray() {
    updateJSON(); 
}

function sortArrayDate(SortDir){
    transactionArray.sort((a,b)=>{
        if(SortDir===1){
            return new Date(a.date) - new Date(b.date);
         }
         else if(SortDir===2){
            return new Date(b.date) - new Date(a.date);
        }
    });
    updateTable();
}

function sortArrayAmt(SortDir){
    transactionArray.sort((a,b)=>{
        if(SortDir===1){
            return a.amount - b.amount;
         }
         else if(SortDir===2){
            return b.amount - a.amount;
        }
    });
    updateTable();
}

// Currency conversion
function convertCurrency() {

    let currencyRate = Math.random()*(1.5 - .5) + 1; 
    
    // Just overwrite transactionArray with new map()
    setTimeout(()=>{
        transactionArray = transactionArray.map(t => {
            t.amount *= currencyRate;
            return t;
        });
        
    },2000);

    
    retrievingCurrencyMessage(1000,3);//simulate currency rate retrieval

    updateArray();
    updateTable();
    updateRunningTotal();
    updateChart(); 
}

function retrievingCurrencyMessage(delay,limit){
    let c = 0;
    let intervalTimer = setInterval(()=>{
            $('#retrievingCurrency').html('Retrieving Currency')//this keeps refreshing message until clearInterval() called
            if(c==limit){ 
                $('#retrievingCurrency').html('Currency Retrieved');
                clearInterval(intervalTimer);
            }
            c++;
        },
        delay
    );
}
let myChart;
// Chart setup
function createChart() {

    const ctx = document.getElementById('transactionChart').getContext('2d');
    myChart = new Chart(ctx, {//need myChart object for updateChart() to use later
        type: 'bar', 
        data: {
            labels: transactionArray.map(transaction => `${transaction.category}`), // This is barchart, label is text
            datasets: [{
                label: 'Transaction Amounts',
                data: transactionArray.map(transaction => transaction.amount), 
                borderWidth: 1
            }]
        }
    });
}

function getCatLabels () {
    let labels = []
    transactionArray.forEach(tran => {
        if(!labels.includes(tran.category)){
            labels.push(tran.category)
        }
    })
    return labels
}

function getCategoryWiseAmount(){
    let catAmt = {}; 
    transactionArray.forEach(tran=>{
        if(Object.keys(catAmt).includes(tran.category)){ //1st iteration, this will evaluate false as catAmt will be an empty obj
            catAmt[tran.category]+=tran.amount;
        }else{//1st iteration, catAmt{} will have a key tran.category (e.g. Salary,Food etc) created & assigned the value for that key for the current transaction that forEach is at now
            catAmt[tran.category]=tran.amount; 
        }
    })
    console.log(catAmt);
    return Object.values(catAmt); //returns an array where each element is the total amount of that category, already in the correct order due to if else above
    // return catAmt; //catAmt already has keys (for chart labels) & values (chart value), can actually combine getCatLabels () & getCategoryWiseAmount() 
}

let myCatChart;
function createCategoryChart(){
    const ctx = document.getElementById('categoryChart').getContext('2d');
    myCatChart = new Chart({
        ctx ,
        type:"bar",
        data:{
            labels : getCatLabels(),
            datasets :[{
                label: "Amount By Category",
                data: getCategoryWiseAmount(),
                borderWidth: 1
            }]
        }
    })
}


function updateChart() {

    const labels = transactionArray.map((transaction) => `${transaction.category}`);
    const data = transactionArray.map((transaction) => transaction.amount);
    
    myChart.data.labels = labels;
    myChart.data.datasets[0].data = data;
    myChart.update();

}

function updateCatChart(){
    
    const labels =  getCatLabels()
    const data = getCategoryWiseAmount()
    
    myCatChart.data.labels = labels;
    myCatChart.data.datasets[0].data = data;
    myCatChart.update();

}