var express =  require("express");
var router = express.Router();

const todoController = require("../controllers/todoController");
const todoItemController = require("../controllers/todoItemController");

// TODO ROUTES
router.get('/', todoController.getTodos);
router.post('/create', todoController.createTodo);

module.exports = router;