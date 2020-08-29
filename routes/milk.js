const express= require('express');
const path= require('path');


const router= express.Router();

const milk_controller= require('../controller/milk_controller');

router.get('/view',milk_controller.view);


module.exports=router;