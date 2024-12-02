// Main Server Application
const express = require('express');
const server = express();

// MIDDLEWARE
const cors = require('cors');
server.use(cors());//middleware to avoid CORS error where client request port & server listen port are different

// to parse application/json requests to get body data coming in json format.
const bodyParser = require('body-parser'); 
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({extended:true}))

const port = process.env.PORT || 5001; // PORT read from .env file
// const users = require('./models/users.js');
const {getAllUsers,createUser} = require('./controllers/user_controller');
const {getToDos,createToDos} = require('./controllers/todos_controller');

// Server request types: 
// get : client requests to get data from server 
// post : client sends data to server 
// put : client request to update existing data on server 
// delete : client request to delete existing data on server 

// All following operations with respect to client perspective

// server.get(<route>,<callback function>) route '/' is home route (homepage)
// callback function always takes arguments (request,response)
server.get('/',(req,res)=>{
    res.send('TEST SEND');//in this case server will send 'TEST SEND' string to client
}) 
// this is just server replying client request with data, any html formatting done on client front-end side
// server.get('/about',(req,res)=>{
//     let data = users;
//     res.json(data);
// })

server.get('/about',getAllUsers);
server.post('/register',createUser);

server.post('/addtodo',createToDos);
server.get('/todos',getToDos);

server.listen(port,()=>console.log(`Listening, server started on port ${port}`));