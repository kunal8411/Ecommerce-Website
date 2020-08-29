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


const Dairyproduct=mongoose.model('Dairyproduct',userSchema); 

module.exports= Dairyproduct;