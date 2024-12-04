// Load Express & Create Server Object
const express = require('express')
const server = express()

// Load Middleware & Configure Server Object to Use It
const cors = require('cors')
server.use(cors())
const bp = require('body-parser')
server.use(bp.json())
server.use(bp.urlencoded({extended:true}))

// Load Env Variables
const port = process.env.PORT || 5000

const {add,multiply} = require('./controllers/calculator_controller')

server.post('/add',add)
// server.get('/multiply/:num1/:num2',multiply) //syntax for sending parameters 'as route' /:<parameter name> per parameter
server.get('/multiply',multiply) //syntax for sending parameters 'as route' :<parameter name>

server.listen(port,()=>console.log('listening to server'))