const express= require('express');
const path= require('path');




const passport= require('passport');

const router= express.Router();
const user_controller= require('../controller/users-controller')  ;


router.get('/login', user_controller.login);

router.get('/register', user_controller.signup);

  
//for sign in 
router.post('/create' ,user_controller.create );


//for log in 
router.post('/createsession', passport.authenticate(
    'local',
    {
        failureRedirect: '/users/login'
        
    },
),user_controller.createSession);




module.exports=router;