const express= require('express');
const path= require('path');


const router= express.Router();

const snacks_controller= require('../controller/snacks_controller');

router.get('/view',snacks_controller.view);


module.exports=router;