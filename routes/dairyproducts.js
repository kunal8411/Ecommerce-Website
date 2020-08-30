const express= require('express');
const path= require('path');


const router= express.Router();

const dairy_controller= require('../controller/dairyproductscontroller');
const cart_controller = require('../controller/cart-controller');

router.post('/update-cart',cart_controller.update);
router.get('/view',dairy_controller.view);




module.exports=router;