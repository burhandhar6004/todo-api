const express = require("express");
const {
  createtodo,
  getTodos,
  deleteTodos,
  updateTodos,
  singTodo,
} = require("../controlers/todoControler");

const router = express.Router();

// todos
router.get("/", getTodos);

// todo
router.get("/:id",singTodo)

// create
router.post("/", createtodo);

// delete
router.delete("/:id", deleteTodos);

// updtae
router.put("/:id", updateTodos);

module.exports = router;
