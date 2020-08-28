const mongoose= require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    image:{
        type:String,
        required: true
    },
    price:{
        type:Number,
        required: true
    },
    size:{
        type:String,
        required: true
    }
});


const Allproduct=mongoose.model('Allproduct',userSchema); 

module.exports= Allproduct;