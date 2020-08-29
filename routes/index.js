const express= require('express');
const path= require('path');


const router= express.Router();


// const app= express();

const homeController= require('../controller/home_controller');
const fruitController= require('../controller/fruits_controller');



router.get('/',homeController.home);




router.use('/fruits', require('./fruits'));
router.use('/cart', require('./cart'));
router.use('/users',require('./users'))
router.use('/vegetables',require('./vegetables'));
router.use('/dairyproducts',require('./dairyproducts'));
router.use('/beverages',require('./beverages'));
router.use('/snacks',require('./snacks'));
router.use('/biscuits',require('./biscuits'));
router.use('/milk',require('./milk'));


module.exports=router;

