document.addEventListener("DOMContentLoaded", function() {
    
    localStorage.clear();//reset localStorage on page load
    localStorage.setItem('transactionTable', '{"transactionTable":[]}');
    localStorage.setItem("runningTotal", 0);//initialize runningTotal when page loads
    
    $('#ddlselectType').change(
        function(){ 
            let sel = $(this).val();
            if(sel=="Income"){
                $('#ddlselectCategory').html(
                    "<option>Select Category</option><option value='Salary'>Salary</option>"
                )
            }else if(sel=="Expense"){
                $('#ddlselectCategory').html(
                    "<option>Select Category</option><option value='Food'>Food</option><option value='Rent'>Rent</option><option value='Rent'>Entertainment</option>"
                )
            }
        }
    )
});

function logDate() {
    $('#dateChecker').on('click', function(){
        var date = new Date($('#transactionDatePicker').val());
        day = date.getDate();
        month = date.getMonth() + 1;
        year = date.getFullYear();
        transactionDate=[day, month, year].join('/')
        localStorage.setItem("transactionDate", transactionDate);
    });
    return transactionDate;
};

function store_ddlSelect(elemid){
    let sType = document.getElementById(elemid);
    selection=sType.options[sType.selectedIndex].value;
    let selectionType=elemid.toString();
    localStorage.setItem(selectionType, selection);
    document.getElementById('test_area3').innerHTML=localStorage.getItem(selectionType);//testing only
    return selection;
}

function storeTransaction(){//called by store transaction

    transactionAmount = document.getElementById('transactionAmount').value;
    localStorage.setItem("Amount", transactionAmount);
    document.getElementById('test_area3').innerHTML=Number(localStorage.getItem("Amount"));//test

    return transactionAmount;
}

function updateJSON(){

    document.getElementById('test_area4').innerHTML=localStorage.getItem("transactionDate") + " 1.5"//test

    //push new transaction object into existing transactionTable
    let transactionTable = localStorage.getItem('transactionTable');
    let parse_obj = JSON.parse(transactionTable);
    parse_obj['transactionTable'].push(
        {
            "transactionDate":localStorage.getItem("transactionDate"),
            "ddlselectType":localStorage.getItem("ddlselectType"),
            "ddlselectCategory":localStorage.getItem("ddlselectCategory"),
            "Amount":localStorage.getItem("Amount")
        }
    );
    transactionTable = JSON.stringify(parse_obj);
    localStorage.setItem("transactionTable", transactionTable);

    document.getElementById('test_area5').innerHTML=transactionTable + " 2";//test

    let tT = localStorage.getItem('transactionTable');
    jsonParsed=JSON.parse(tT);
    document.getElementById('test_area6').innerHTML=jsonParsed.transactionTable.transactionDate+ " 3";//test

}

function addRow(){
    
    let tt1='<tr>';
    let tt2=$('<td></td>').text(localStorage.getItem("transactionDate"));;
    let tt3=$('<td></td>').text(localStorage.getItem("ddlselectType"));
    let tt4=$('<td></td>').text(localStorage.getItem("ddlselectCategory"));
    let tt5=$('<td></td>').text(localStorage.getItem("Amount"));
    let tt6='</tr>';
    $('#transactionTable').after(tt1,tt2,tt3,tt4,tt5,tt6);
    
    let lUA = Number(localStorage.getItem("Amount"))
    //document.getElementById('test_area7').innerHTML=runningCount(latestUpdateAmount);//test
    if(localStorage.getItem("ddlselectType")=='Expense'){latestUpdateAmount=-1*lUA;}
    else {latestUpdateAmount=lUA;}

    let runningTotal = Number(localStorage.getItem("runningTotal"));
    let latestRunningTotal = runningTotal+latestUpdateAmount;
    localStorage.setItem("runningTotal", latestRunningTotal);
    document.getElementById('test_area7').innerHTML=latestRunningTotal + "   RUNNING TOTAL";//test

}