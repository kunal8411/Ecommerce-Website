const Product= require('../models/products');
const mongoose= require('mongoose');
const db= require('../config/mongoose');


// mongoose.connect('localhost:27017/learning');

// mongoose.connect('mongodb://localhost:27017/shopping', 
// {
//      useNewUrlParser: true
     
//     });

// const { exists } = require('../models/products');
// const { Mongoose } = require('mongoose');

var products= [
    new Product({
        imagePath:'https://5.imimg.com/data5/LM/DU/MY-22954806/apple-fruit-500x500.jpg',
        title:'Apple',
        description:'hello apple',
        price: 10
    }),

    new Product({
        imagePath:'https://cdn.mos.cms.futurecdn.net/42E9as7NaTaAi4A6JcuFwG.jpg',
        title:'Banana',
        description:'hello Banana',
        price: 7
    }),
    new Product({
        imagePath:'https://image.shutterstock.com/image-photo/grapes-on-white-background-260nw-1197566971.jpg',
        title:'Grapes',
        description:'hello Grapes',
        price: 10
    })

];


var done=0;

for(var i=0;i<products.length;i++){
    
    products[i].save(function(err,result){
        done++;
        if(done===products.length){
            exit();

        }
    });
}   

function exit(){
  mongoose.disconnect();
   
}
