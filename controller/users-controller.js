const User= require('../models/user');
const router = require('../routes/biscuits');


//contact-us page 
module.exports.contactus= function(req,res){
    return res.render('../views/contactus')
}



//for login post request 
module.exports.createSession= function(req,res){
   
   
    return res.redirect('/'); 
    
}

//for post sign-in method
module.exports.create= function(req,res){
    // console.log(req.body);
    if(req.body.password != req.body.confirm_password){
        console.log('both password should be matched');
        return res.redirect('back');

    }  
    
    User.findOne({email: req.body.email},function(err,user){
        if(err){
            console.log('error finding in user in sign up');
            return; 
     
        }
        if(user){
            console.log('Email address already existed ')
        }
        if(!user){
            User.create(req.body, function(err,user){
                if (err){console.log('error in creating user while signing up');  return ;}


                return res.redirect('/users/login'); 
            })
        }
        else{
            return res.redirect('back'); 
        }
    });

}



//for login get method 
module.exports.login= function(req,res){
    return res.render('../views/login');
}


//for signup get method 
module.exports.signup= function(req,res){
    return res.render('../views/signup');
}


module.exports.thanks= function(req,res){
    return res.render('../views/thanks');
}