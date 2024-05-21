const mongoose = require("mongoose");

const mongooseDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://burhan:burhan@cluster0.qkwiomg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
    console.log("DB connections Success",conn.connection.host);
  } catch (error) {
    console.log("DB connection failed",error.message);
  }
};


module.exports={mongooseDB}