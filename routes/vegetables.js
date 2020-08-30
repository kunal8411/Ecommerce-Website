const express= require('express');
const path= require('path');


const router= express.Router();
const vegcontroller= require('../controller/vegcontroller');
const cart_controller = require('../controller/cart-controller');



router.get('/view',vegcontroller.view);

router.post('/update-cart',cart_controller.update);


module.exports=router;