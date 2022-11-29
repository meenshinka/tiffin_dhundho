const mongoose = require('mongoose')


const buyerSchema = new mongoose.Schema({
    name : { type:String,
             required:true},

    phone_number:{ type : Number,
                   required:true},

    email : { type : String,
              required:true},

    password :{ type : String,
                required:true},

    cpassword : { type : String,
                  required:true},  
})


module.exports=new mongoose.model('userAuth',buyerSchema)
 ;