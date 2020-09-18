// GET the model
const models =  require('../models')


// get all todos
exports.getTodos = async (req, res, next)=>{

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
