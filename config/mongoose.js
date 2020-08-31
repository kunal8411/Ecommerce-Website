const mongoose= require('mongoose');


// create a database having name Learning 
mongoose.connect('mongodb://kunal:kunal@11th@ds157829.mlab.com:57829/learninig');



//Acquire the connection:-check whether db is  connected or not
const db= mongoose.connection;

//error
db.on('error',console.error.bind(console,'error connecting to database'));

//if up and running
db.once('open',function(){
    console.log("database connected successfully");
    
})

module.exports=db;