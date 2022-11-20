const express=require('express')
const Router = express.Router();

const Home = require('../controllers/Home.js')
const Signup = require('../controllers/Signup.js')
const Login = require('../controllers/Login.js')

Router.get('/Home' , Home);
Router.get('/Login' , Login);
Router.get('/Signup' , Signup);

module.exports = Router;