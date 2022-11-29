const express = require('express')
// const buyerModel = require('./Models/tiffinbuyer.js')
require('./Models/dbconnection.js')
const app=express()

app.use(express.json());

app.use(require('./Routes/Route.js'))

app.get('/Home', (req,res)=>{
    res.send("this is home page");
})

app.get('/buyerLogin', (req,res)=>{
    res.send("this is buyerlogin page");
})

app.get('/sellerLogin', (req,res)=>{
    res.send("this is sellerlogin page");
})

app.get('/buyerSignup', (req,res)=>{
    res.send("this is buyersignup page");
})

app.get('/sellerSignup', (req,res)=>{
    res.send("this is sellersignup page");
})

app.listen(7000,()=>{
    console.log("hello app");
});