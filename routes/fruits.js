const express= require('express');
const path= require('path');


const router= express.Router();
const Product= require('../models/products');

const controller =require('../controller/home_controller');
const fruits_controller= require('../controller/fruits_controller');
const cart_controller= require('../controller/cart-controller');

router.post('/update-cart',cart_controller.update);


router.get('/view',fruits_controller.fruits);



module.exports=router;