// GET the model
const models =  require('../models')


// get all todos
exports.getTodos = (req, res, next)=>{

    models.Todo.findAll()
    .then((todo)=>{
        res.json({
            message: "Here is the list of all todos",
            data: todo,
            status: true
        })
        console.log("Todo list rendered successfully")
    })
    .catch((err)=>{
        res.json({
            message: `There was an error retrieving all todos: ${err}`,
            status: false
        })
    })

};


// create a todo
exports.createTodo = (req, res, next)=>{

    models.Todo.create({
        title: req.body.title
    })
    .then((todo)=>{
        res.json({
            message: "Todo created successfully",
            data: todo,
            status: true
        })
    })
    .catch((err)=>{
        res.json({
            message: `There was an error creating todo ${err}`,
            status: false
        })
    })

};