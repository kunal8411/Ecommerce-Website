const express= require('express');
const path= require('path');


const router= express.Router();
const vegcontroller= require('../controller/vegcontroller');



router.get('/view',vegcontroller.view);



module.exports=router;