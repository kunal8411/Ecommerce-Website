const express= require('express');
const path= require('path');


const router= express.Router();

const biscuits_controller= require('../controller/biscuits_controller');


router.get('/view', biscuits_controller.view);


module.exports=router;