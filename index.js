const express= require('express');

const app=express();

var exphbs  = require('express-handlebars');

const path= require('path');
const mongoose= require('./config/mongoose');

app.use(express.urlencoded());
// app.use(cookieParser());
const Product= require('./models/products');




const port =3000;
app.use(express.static('./assets'));
app.set('views','./views');
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

app.use('/',require('./routes/index'));



app.listen(port,function(err){
    if(err){
        console.log('server will not run on this port:',port );//interpoletion

    }

    console.log('server is running on port:',port);

})
