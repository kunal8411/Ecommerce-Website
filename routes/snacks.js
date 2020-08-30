const express= require('express');
const path= require('path');


const router= express.Router();

const snacks_controller= require('../controller/snacks_controller');
const cart_controller = require('../controller/cart-controller');

router.post('/update-cart',cart_controller.update);
router.get('/view',snacks_controller.view);


module.exports=router;