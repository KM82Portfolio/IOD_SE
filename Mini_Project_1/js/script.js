let transactionArray = [];
let runningTotal = 0;

$(document).ready(function () {
    localStorage.clear();
    updateRunningTotalDisplay();
    createChart();
    createCategoryChart();

    $('#start-btn').on('click', function () {
        changeCurrencySimulation(500, 5);
    });
});

// UTILITY FUNCTIONS CALLED BY ACTUAL FUNCTIONS WHICH UPDATE HTML LATER
// ====================================================================
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

// Update running total
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
    updateTable();
    updateRunningTotal();
    updateChart(); 
}

// HTML UPDATE FUNCTIONS
// =====================

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
            `<option>Select Category</option>
            <option value='Food'>Food</option>
            <option value='Rent'>Rent</option>
            <option value='Entertainment'>Entertainment</option>`
        );
    }
});

// Push everything recorded in form to transactionArray
$('#btnUpdTbl').click(logTransaction);

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
        updateTable();
        updateRunningTotal();
        updateChart();
        updateCatChart();

        $('#transactionAmount').val(''); //reset transactionAmount input box to ready for next transaction
        console.log('Transaction recorded:', transaction);
    } 
}

function sortArrayDate(SortDir){
    transactionArray.sort((a,b)=>{
        if(SortDir===1) {return new Date(a.date) - new Date(b.date);}
         else if(SortDir===2) {return new Date(b.date) - new Date(a.date);}
    });
    updateTable();
}

function sortArrayAmt(SortDir){
    transactionArray.sort((a,b)=>{
        if(SortDir===1) {return a.amount - b.amount;}
         else if(SortDir===2) {return b.amount - a.amount;}
    });
    updateTable();
}

let myChart;//must be specified outside function because myCatChart will be used by multiple functions

// Chart setup
function createChart() {
    const ctx = document.getElementById('transactionChart').getContext('2d');
    myChart = new Chart(ctx, {
        type: 'bar', 
        data: {
            labels: [],
            datasets: [{
                label: 'Transaction Amounts',
                data: [], 
                borderWidth: 1,
                backgroundColor: 'rgba(75, 192, 192, 0.2)', // Chart background color
                borderColor: 'rgba(75, 192, 192, 1)', // Chart border color
            }]
        }
    });
}

function getCatLabels() {
    let labels = [];
    transactionArray.forEach(transaction => {
        if (!labels.includes(transaction.category)) {
            labels.push(transaction.category);
        }
    });
    return labels;
}

function getCategoryWiseAmount() {
    let catAmt = {};
    transactionArray.forEach(transaction => {
        if (!catAmt[transaction.category]) { //On 1st run or on not yet encountered category, create new category
            catAmt[transaction.category] = 0;
        }
        catAmt[transaction.category] += transaction.amount;
    });
    return Object.values(catAmt); //returns values already in the order of 
    //return catAmt; //This case in data: forEach() function that returns value in [key,value] of Object.entries(catAmt)
}

let myCatChart;//must be specified outside function because myCatChart will be used by multiple functions

// Category Chart setup
function createCategoryChart() {
    const ctx = document.getElementById('categoryChart').getContext('2d');
    myCatChart = new Chart(ctx, {
        type: 'pie', 
        data: {
            labels: getCatLabels(),
            datasets: [{
                label: 'Category Wise Amount',
                data: getCategoryWiseAmount(),
                backgroundColor: ['blue', 'red', 'green', 'yellow'], 
            }]
        }
    });
}

// Update transaction chart
function updateChart() {
    myChart.data.labels = transactionArray.map((transaction) => transaction.category);
    myChart.data.datasets[0].data = transactionArray.map((transaction) => transaction.amount);
    myChart.update(); 
}

// Update category chart
function updateCatChart() {
    myCatChart.data.labels = getCatLabels();
    myCatChart.data.datasets[0].data = getCategoryWiseAmount();
    myCatChart.update(); 
}

function convertCurrency() {
    let currencyRate = Math.random() * (1.5 - 0.5) + 1;
    transactionArray.forEach((transaction) => {
        transaction.amount *= currencyRate;
    });
}

function changeCurrencySimulation(delay, limit) {

    // Simulate fetching currency delay, display only
    let c = 0;
    const intervalTimer = setInterval(() => {
      if (c === 0) {
        $('#test_area11').html('Extracting Currency');
      } else if (c < limit) {
        $('#test_area11').append('.'); // Adds a dot for each interval
      } else {
        $('#test_area11').text(runningTotal * 1.5); // Clear message after reaching limit
        convertCurrency(); //Update amounts in table, running total by performing currency conversion after limit reached
        updateTable();//why does 1st run of updateTable() not reflect convertCurrency() above?
        updateRunningTotal();
        updateChart();
        clearInterval(intervalTimer); // Stop the interval
      }
      c++;
    }, delay);

}