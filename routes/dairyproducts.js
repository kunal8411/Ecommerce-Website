const express= require('express');
const path= require('path');


const router= express.Router();

const dairy_controller= require('../controller/dairyproductscontroller');

router.get('/view',dairy_controller.view);




module.exports=router;