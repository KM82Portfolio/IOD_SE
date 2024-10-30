let transactionArray = [];
let runningTotal = 0;

$(document).ready(function() {
    // Clear localStorage and initialize the application
    localStorage.clear(); 
    updateRunningTotalDisplay();
    createChart(); 
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
        $('#transactionAmount').val(''); 
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

// Sort table by column
function sortTable(colIndex) {
    transactionArray.sort((a, b) => {
        if (colIndex === 0) {
            return new Date(a.date) - new Date(b.date);
        } else if (colIndex === 1) {
            return a.type.localeCompare(b.type);
        } else if (colIndex === 2) {
            return a.category.localeCompare(b.category);
        } else if (colIndex === 3) {
            return a.amount - b.amount;
        }
    });
    updateTable();
}

// Currency conversion
function convertCurrency() {
    let factor = Math.random() * (1.5 - 0.5) + 0.5; 
    transactionArray = transactionArray.map(t => {
        t.amount *= factor;
        return t;
    });
    updateArray();
    updateTable();
    updateRunningTotal();
    updateChart(); 
}

// Chart setup
let myChart;
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

function updateChart() {

    const labels = transactionArray.map(transaction => `${transaction.category}`);
    const data = transactionArray.map(transaction => transaction.amount);
    
    myChart.data.labels = labels;
    myChart.data.datasets[0].data = data;
    myChart.update();

}
