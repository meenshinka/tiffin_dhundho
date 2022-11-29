const express=require('express')
const Router = express.Router();


const Home = require('../controllers/Home.js')

const {buyerLogin,sellerLogin,buyerSignup,sellerSignup} = require('../controllers/Credentials.js')

Router.get('/Home' , Home);
Router.post('/buyerLogin' , buyerLogin);
Router.post('/sellerLogin' , sellerLogin);
Router.post('/buyerSignup' , buyerSignup);
Router.post('/sellerSignup' ,sellerSignup);

module.exports = Router;