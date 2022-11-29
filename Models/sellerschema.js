const mongoose = require('mongoose')


const sellerSchema = new mongoose.Schema({
    name : { type:String,
             required:true},

    sname : { type:String,
                required:true},

    slocation : { type:String,
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


module.exports=new mongoose.model('sellerAuth',sellerSchema)
 ;