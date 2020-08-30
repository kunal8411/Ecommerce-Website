const express= require('express');
const path= require('path');


const router= express.Router();

const beverages_controller= require('../controller/beverages_controller');
// const { route } = require('./vegetables');
const cart_controller = require('../controller/cart-controller');

router.post('/update-cart',cart_controller.update);


router.get('/view', beverages_controller.view);


module.exports=router;