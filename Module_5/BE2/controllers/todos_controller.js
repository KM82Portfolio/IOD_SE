const {todos} = require('../models/todos') // ../ sets folder 1 level towards root as start of access point

const getToDos = (req,res)=>{
    res.json(todos);
}
const createToDos = (req, res)=> {
    console.log('Thunder Client ',req.body) //nodemon console, not browser console
}

module.exports = {
    getToDos,
    createToDos
}