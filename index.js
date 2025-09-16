require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Todo = require("./models/schema.js");
const methodOverride = require("method-override");
const PORT = process.env.PORT || 8080;


app.use(express.static(path.join(__dirname , "public")));
app.use(methodOverride("_method"));


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({extended : true}));
app.use(express.json());

// const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


async function main() {
  await mongoose.connect("mongodb+srv://hv04090_db_user:g7TQ0un2XC5B5e0C@cluster0.cvpv5db.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
}

main()
  .then((res) => {
    console.log("Connection is successful");
  })
  .catch((err) => {
    console.log(err);
  });

// console.log(task1);

app.get("/", async (req , res)=>{
    let todos = await Todo.find();
    res.render("index.ejs" , {todos});
})
app.post("/", async (req , res)=>{
   let{ task , dueDate, priority} = req.body;
   let newTask = new Todo({
    task,
    dueDate,
    priority
   });
   
   await newTask.save();
   res.redirect("/");
})

// app.get("/", (req, res) => {
//   res.send("TODO");
// });

app.get("/newtask" , async (req , res)=>{
    res.render("newTask.ejs");
  })

app.delete("/task/:id" , async (req, res)=>{
  let { id } = req.params;
  let deleted = await Todo.findByIdAndDelete(id);
  //console.log(deleted);
  res.redirect("/");
 })

app.listen(PORT, () => {
  console.log("server is running");
});
