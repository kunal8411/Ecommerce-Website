const express= require('express');
const path= require('path');


const router= express.Router();
const Product= require('../models/products');

const controller =require('../controller/home_controller');

const fruits_controller= require('../controller/fruits_controller');

const test_controller= require('../controller/test_controller');


router.get('/view',fruits_controller.fruits);

router.get('/test',test_controller.test);

//some action here
router.post('/test1' , test_controller.check);

module.exports=router;