// initializing the database with some data for future 

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Todo = require("./models/schema.js");

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/todo");
}

main()
    .then((res) =>{
        console.log("Connection is successful");
    })
    .catch(err=>{
        console,log(err);
    })

    let allTodos = [
        {
        task: "STUDY DSA ",
        dueDate : new Date("2025-08-26"),
        priority : "High"
        },

        {
        task: "MERN PROJECT COMPLETION ",
        dueDate : new Date("2025-08-26"),
        priority : "Medium"
        },

        {
        task: "TEST FOR APTITUDE",
        dueDate : new Date("2025-08-26"),
        priority : "Medium"
        }
    ];

    console.log(allTodos);

     Todo.insertMany(allTodos);

