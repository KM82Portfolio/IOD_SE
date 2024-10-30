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
    let sel = $(this).val();
    if (sel === "Income") {
        $('#ddlselectCategory').html(
            "<option>Select Category</option><option value='Salary'>Salary</option>"
        );
    } else if (sel === "Expense") {
        $('#ddlselectCategory').html(
            "<option>Select Category</option><option value='Food'>Food</option><option value='Rent'>Rent</option><option value='Entertainment'>Entertainment</option>"
        );
    }
});

// Push everything recorded in form to transactionArray
$('#btnUpdTbl').click(logTransaction);

// Push Transaction into transactionArray
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
        updateChart(); 
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

function sortArrayDate(SortDir) {
    transactionArray.sort((a, b) => {
        if (SortDir === 1) {
            return new Date(a.date) - new Date(b.date);
        } else if (SortDir === 2) {
            return new Date(b.date) - new Date(a.date);
        }
    });
    updateTable();
}

function sortArrayAmt(SortDir) {
    transactionArray.sort((a, b) => {
        if (SortDir === 1) {
            return a.amount - b.amount;
        } else if (SortDir === 2) {
            return b.amount - a.amount;
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
    const ctx = document.getElementById('transactionChart').getContext('2d'); //jQuery doesn't work
    myChart = new Chart(ctx, {
        type: 'bar', 
        data: {
            labels: transactionArray.map(transaction => transaction.category),
            datasets: [{
                label: 'Transaction Amounts',
                data: transactionArray.map(transaction => transaction.amount), 
                borderWidth: 1
            }]
        }
    });
}

function updateChart() {

    const labels = transactionArray.map(transaction => transaction.category);
    const data = transactionArray.map(transaction => transaction.amount);
    
    myChart.data.labels = labels;
    myChart.data.datasets[0].data = data;
    myChart.update();
}

function updateCategoryChart() {//Recreate the chart whenever transactionArray updated

    const startDate = new Date($('#startDatePicker').val());
    const endDate = new Date($('#endDatePicker').val());
    
    const totalByCategory = {};

    // Loop through each transaction to aggregate amounts by category within the date range
    transactionArray.forEach(transaction => {
        const transactionDate = new Date(transaction.date);//retrieve date of each transaction in transactionArray for comparison next step

        // Check if the transaction date falls within the selected range & record Category & Amount if so
        if (transactionDate >= startDate && transactionDate <= endDate) {
            const category = transaction.category;
            const amount = transaction.amount;

            // Initialize the category in the totalByCategory object if it doesn't exist
            if (!totalByCategory[category]) {
                totalByCategory[category] = 0;
            }
            totalByCategory[category] += amount; // Aggregate the amounts
        }
    });

    // Prepare the data for the chart
    const categories = Object.keys(totalByCategory);
    const amounts = categories.map(cat => totalByCategory[cat]);

    // Update the category chart
    const ctx = document.getElementById('categoryChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: categories,
            datasets: [{
                label: 'Total Amount by Category',
                data: amounts,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        }
    });
}
