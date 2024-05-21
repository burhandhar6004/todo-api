const Todo = require("../models/todoModels");
// create todo
const createtodo = async (req, res) => {
  const { title, description } = req.body;
  if (!title || !description) {
    res.json({ msg: "please fill all detail" });
  }

  const todo = await Todo.create({ title, description });
  if (!todo) {
    res.json({ msg: "can not created" });
  }

  res.json(todo).status(201);
};

// read todos
const getTodos = async (req, res) => {
  //   res.json({ msg: "all todo" });

  const todos = await Todo.find();

  if (!todos) {
    res.json({ msg: "not found" });
  }

  res.json(todos).status(200);
};

// Single todo
const singTodo = async (req,res)=>{
  
  const singleTodo = await Todo.findById(req.params.id);
  if(!singleTodo){
    res.json({msg : "not found"}).status(404);
  }
  
  res.json(singTodo).status(200)
}

// delete todo
const deleteTodos = async (req, res) => {
  
  await Todo.findByIdAndDelete(req.params.id);
   res.json({msg :"todo Deleted"}).status(200)
};

// update todo
const updateTodos = async (req, res) => {
  // res.json({ msg: "all todo updated" });

  const updateTodo = await Todo.findByIdAndUpdate(req.params.id,req.body,{new:true})

  res.json(updateTodo).status(200)
};

module.exports = { createtodo, getTodos, deleteTodos, updateTodos,singTodo };
