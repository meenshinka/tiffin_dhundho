const express = require("express");
const emailvalidator = require("email-validator");
const buser = require("../Models/tiffinbuyer.js");
const Suser = require('../Models/sellerschema.js');
const app = express();

app.use(express.json());

const buyerSignup = async (req,res,next)=>{
  const {name, phone_number, email, password, cpassword}=req.body;
  
      try{
         if (!(name && phone_number && email && password && cpassword)){
         res.send("all fields are required!")
        }
        else if(password != cpassword){
          res.send("Password does'nt match!")
        }

        else if(!emailvalidator.validate(req.body.email) ){
          res.status(400).send('Enter a Valid Email Address');
      }

        const userExist=await buser.findOne({email});
        if(userExist){
         res.send("User already exist")
        }
  
        const user = new buser({ name,  phone_number, email, password, cpassword });
        const registered = await user.save();
        if (registered) {
          res.status(201).json({ success: true });
        }
      
     
     }catch(err){
       console.log(err);
     }
    }
  
  const sellerSignup = async (req,res,next)=>{
  
    const {name,sname ,slocation, phone_number, email, password, cpassword}=req.body;
  
  try{
        if (!(name && sname && slocation && phone_number && email && password && cpassword )){
        res.send("All fields are required!")
       }
  
       else if(password != cpassword){
        res.send("Password does'nt match!")
      }
      else if(!emailvalidator.validate(req.body.email) ){
        res.status(400).send('Enter a Valid Email Address');
      }
  
       const sellerExist= await Suser.findOne({email});
       if(sellerExist){
        res.send("This account is already exist")
       }
  
       const user = new Suser({ name, sname, slocation, phone_number, email, password, cpassword });
       const registered = await user.save();
       if (registered) {
         res.status(201).json({ success: true });
       }
     
    }catch(err){
      console.log(err);
    }
  }
  
   

const buyerLogin = async (req, res, next) => {
 const{ email, password } = req.body;
  const userExist = await buser.findOne({ email });
  // console.log(userExist);
  try {
    if (userExist) {
      if (userExist.password === password) {
        res.send("Login Successfull");
      } else {
        res.send("Invalid Credentials!");
      }
    } else {
      res.send("Register yourself first!");
    }
  } catch (err) {
    console.log(err);
  }
};

const sellerLogin = async (req, res, next) => {
  const { email, password } = req.body;
  const sellerExist = await suser.findOne({ email });
  // console.log(userExist);
  try {
    if (sellerExist) {
      if (sellerExist.password === password) {
        res.send("Login Successfull");
      } else {
        res.send("Invalid Credentials!");
      }
    } else {
      res.send("Register yourself first!");
    }
  } catch (err) {
    console.log(err);
  }
};

exports.buyerSignup  = buyerSignup,
exports.sellerSignup  = sellerSignup
exports.buyerLogin = buyerLogin;
exports.sellerLogin = sellerLogin;
