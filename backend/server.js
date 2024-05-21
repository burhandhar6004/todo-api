const express = require("express");
const { mongooseDB } = require("./config/db_config");

require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 5000;

mongooseDB();

app.use(express.json())
app.use(express.urlencoded({extended:true}))

// main root
app.get("/", (req, res) => {
  res.send("welcome to crud");
});

// todo routes
app.use("/api/todo", require("./routes/todoRoutes"));

app.listen(PORT, () => {
  console.log(`server is running at ${PORT}`);
});
