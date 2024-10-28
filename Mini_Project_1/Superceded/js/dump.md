function updateJSON(){

    document.getElementById('test_area4').innerHTML=newTransaction + " 1"//test
    
    //push new transaction object into existing transactionTable
    let transactionTable = localStorage.getItem('transactionTable');
    let parse_obj = JSON.parse(transactionTable);
    parse_obj['transactionTable'].push(
        {
            "transactionDate":localStorage.getItem("transactionDate").toString(),
            "ddlselectType":localStorage.getItem("ddlselectType").toString(),
            "ddlselectCategory":localStorage.getItem("ddlselectCategory").toString(),
            "Amount":localStorage.getItem("Amount")
        }
    );
    transactionTable = JSON.stringify(parse_obj);
    localStorage.setItem("transactionTable", transactionTable);

    document.getElementById('test_area5').innerHTML=transactionTable + " 2";//test

    let tT = localStorage.getItem('transactionTable');

    document.getElementById('test_area6').innerHTML=JSON.parse(tT) + " 3";//test

}

 //push new transaction object into existing transactionTable
 let transactionTable = localStorage.getItem('transactionTable');
 let parse_obj = JSON.parse(transactionTable);
 parse_obj['transactionTable'].push(
     {
         "transactionDate":transactionDate_val,
         "ddlselectType":ddlselectType_val,
         "ddlselectCategory":ddlselectCategory_val,
         "Amount":Amount_val
     }
 );
 transactionTable = JSON.stringify(parse_obj);
 localStorage.setItem("transactionTable", transactionTable);

 document.getElementById('test_area5').innerHTML=transactionTable + " 2";//test

 let tT = localStorage.getItem('transactionTable');

 document.getElementById('test_area6').innerHTML=JSON.parse(tT) + " 3";//test

 {"transactionTable":[{"transactionDate":"23/10/2024","ddlselectType":"Income","ddlselectCategory":"Salary","Amount":"123"}]} 
 {"transactionTable":[{"transactionDate":"23/10/2024","ddlselectType":"Income","ddlselectCategory":"Salary","Amount":"123"},{"transactionDate":"23/10/2024","ddlselectType":"Income","ddlselectCategory":"Salary","Amount":"333"}]} 2



