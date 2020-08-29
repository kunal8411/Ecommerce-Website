const express= require('express');
const path= require('path');


const router= express.Router();

const beverages_controller= require('../controller/beverages_controller');
// const { route } = require('./vegetables');

router.get('/view', beverages_controller.view);

module.exports=router;