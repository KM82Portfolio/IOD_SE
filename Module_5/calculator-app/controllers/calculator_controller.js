const add = (req,res)=>{
    console.log(req.body)
    let num1 = req.body.num1
    let num2 = req.body.num2
    res.json({result : num1+num2})
}

const multiply = (req,res)=>{
    console.log(req)
    // console.log(req.params)
    console.log(req.query)
}

module.exports={
    add,
    multiply
}