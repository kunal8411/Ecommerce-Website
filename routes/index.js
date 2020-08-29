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

module.exports=router;

