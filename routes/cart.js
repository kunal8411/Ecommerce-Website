const express= require('express');
const path= require('path');


const router= express.Router();

const cart_controller= require('../controller/cart-controller');


router.get('/checkout',cart_controller.checkout);




module.exports=router;