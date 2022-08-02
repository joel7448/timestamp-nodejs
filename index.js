
const fs = require("fs");
const express = require("express");
const { env } = require("process");
const app = express();
const date= new Date();
const dotenv= require("dotenv");



app.get("/createtimestamp",function (req,res){
    fs.writeFile(`./${date.getDate()}-${date.getMonth()}-${date.getFullYear()}-${date.getHours()}.txt`,`Date:${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()} 
    timestamp : ${new Date()}`,(err)=>{
        if(err) throw err;
        console.log("File created");
    })
    res.json("file-created")
})

app.listen(3000 || process.env.PORT);
