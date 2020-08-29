const mongoose= require('mongoose');


const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true
    }
    
},  {
        timestamps: true
});


const Milk=mongoose.model('Milk',userSchema); 

module.exports= Milk;