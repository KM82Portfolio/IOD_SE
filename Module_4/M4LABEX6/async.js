let url='https://jsonplaceholder.typicode.com/todos';

let todoData = [];//if this global var created, then call fetchToDo(url) globally also & no need to call fetchToDo(url) within populateDiv()
const fetchToDo = async (url) => {
    try{
        let todoData = await fetch(url);//don't go to next line until fetch(url) completes
        let tD = await todoData.json();//Ensure JSON Parsing completes
        let tD11 = tD.slice(0,11) //extract 1st 11 elements only
        todoData = tD11;
        populateDiv(todoData);//Allows us to call populateDiv() whereever needed without having to fetch data again.
        console.log('1',tD11);//testing
        return tD11;
    }
    catch(err){
        console.log(err);
    }
}
fetchToDo(url);
const populateDiv = async (todoObj) => {

    let mainContainer = document.querySelector('.mainContainer');
    mainContainer.innerHTML='';
    
    // let todoObj = await fetchToDo(url);
    // console.log('2',todoObj);

    todoObj.forEach((td)=>{

        console.log(td);
        let todoDiv = document.createElement('div');

        let userIdP = document.createElement('p');
        userIdP.innerText = td.userId;
        
        let idP = document.createElement('p');
        idP.innerText = td.id;
        
        let titleP = document.createElement('p');
        titleP.innerText = td.title;
        
        let completedP = document.createElement('p');
        completedP.innerText = td.completed;
        
        todoDiv.appendChild(userIdP);
        todoDiv.appendChild(idP);
        todoDiv.appendChild(titleP);
        todoDiv.appendChild(completedP);
        mainContainer.appendChild(todoDiv);

    })
    
}
// populateDiv();