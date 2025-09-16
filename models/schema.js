const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  task: {
    type: String,
    require: true,
  },
  dueDate: {
    type: String,
  },
  priority: {
    type: String,
    enum: ["Low", "Medium", "High"], default: "Low"
  },
}); 

const Todo = mongoose.model("todo", schema);

module.exports = Todo;
