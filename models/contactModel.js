const mongoose = require('mongoose');


const contactModel = mongoose.Schema({
    name : {
        type:String  ,
        required : [true ," Name Required "] 
    },
    email : {
        type:String  ,
        required : [true ," Email  Required "] 
    },
    phone  : {
        type: String  ,
        required : [true ," Phone Number is  Required "] 
    }
} ,
{
    timestamps : true 
});

module.exports = mongoose.model("Contact" , contactModel)
