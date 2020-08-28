const mongoose= require('mongoose');

const userSchema = new mongoose.Schema({
    imagePath:{
        type:String,
        required: true,
        
    },
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    price:{
        type:Number,
        required: true
    }
    
},  {
        timestamps: true
});


const Product=mongoose.model('Product',userSchema); 

module.exports= Product;