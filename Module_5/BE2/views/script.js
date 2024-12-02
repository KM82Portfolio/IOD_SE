// Front-End js script that will interface with server scripts
const fetchUsers = async () => {
    const users = await fetch('http://localhost:5001/about');
    console.log(users);
    const userData = await users.json(); //also need await as parsing might take time if a lot of data
    console.log(userData);
    return userData;
}

const main = async () => {

    const resultsContainer = document.querySelector('#results-container');
    const users = await fetchUsers();

    users.forEach((usr) => {

        let userdiv = document.createElement('div');
        userdiv.innerHTML = `
            <h1>${usr.name}</h1>
            <h2>${usr.email}</h2>
        `;
        resultsContainer.appendChild(userdiv);
    })

    const userForm = document.querySelector('#user-form');
    userForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const formData = new FormData(userForm); //use default userForm object to capture form data
        console.log(formData.get('name'));
        console.log(formData.get('email'));
        console.log(formData);

        const resp = await fetch('http://localhost:5001/register', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: formData.get('name'),
                email: formData.get('email')
            })

        })

        // console.log(event);
    })

    const todoForm = document.querySelector('#todo-form');
    todoForm.addEventListener('submit', async (ev) => {

        ev.preventDefault();
        const todoFormData = new FormData(todoForm);

        const response = await fetch('http://localhost:5001/addtodo', {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                task: todoFormData.get('task'),
                completion_status: todoFormData.get('completion_status')
            })
        })
    })

}

main(); 