const express= require('express');
const port =8080;
const HOST = '0.0.0.0';
const app=express();
const path= require('path');
app.use(express.urlencoded());
const passport= require('passport');
const passportLocal= require('./config/passport-local-strategy');
const mongoose= require('./config/mongoose');
const flash= require('connect-flash');
const session= require('express-session');
const MongoStore= require('connect-mongo')(session);
const db = require('./config/mongoose');
const Product= require('./models/products');
const customMware= require('./config/middleware');
const http = require('http');



// app.use(cookieParser());

app.use(session({
    secret:'abcdefghijk',
    saveUninitialized:'false',
    resave:'false',
    cookie:{
         
        maxAge:(1000 * 60 * 100)
    },
    store:new MongoStore(
        {
             mongooseConnection:db,
             autoRemove: 'disabled'

        },
        function(err){
            console.log(err || 'connect-mongoose setup OK')
        }
        )
}));


app.use(express.static('./assets'));
app.use(express.json());




//global middleware to pass the session variable to front end part 
app.use((req,res,next) =>{
    res.locals.session= req.session;
    next();

})


app.set('views','./views');
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticateduser);
app.use(flash());
app.use(customMware.setFlash);  


app.use('/',require('./routes/index'));



app.listen( port, HOST ,function(err){
    if(err){
        console.log('server will not run on this port:',port );

    }

    console.log('server is running on port:',port);

})
