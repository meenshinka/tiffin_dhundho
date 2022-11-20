const express = require('express')
const app=express()

app.use(require('./Routes/Route.js'))

app.get('/Home', (req,res)=>{
    res.send("this is home page");
})

app.get('/Login', (req,res)=>{
    res.send("this is login page");
})

app.get('/Signup', (req,res)=>{
    res.send("this is signup page");
})

app.listen(8000,()=>{
    console.log("hello app");
});