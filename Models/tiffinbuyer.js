const mongoose = require('mongoose')

let validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const buyerSchema = new mongoose.Schema({
    name : { type:String,
             required:true},

    phone_number:{ type : Number,
                   required:true},

    email : { type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },

    password :{ type : String,
                required:true},

    cpassword : { type : String,
                  required:true},  
})


module.exports=new mongoose.model('userAuth',buyerSchema)
 ;