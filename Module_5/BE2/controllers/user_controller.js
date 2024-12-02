const {users} = require('../models/users'); // ../ sets folder 1 level towards root as start of access point
const {todos} = require('../models/todos');

const getAllUsers = (req, res)=>{
    res.json(users)
}

const createUser = (req, res)=> {
    console.log('req = ',req);
    console.log('req.body = ',req.body)
    res.send('hello')
}

module.exports = {
    getAllUsers,
    createUser
}