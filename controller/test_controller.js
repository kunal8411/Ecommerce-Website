const Product = require('../models/products');



module.exports.test= function(req,res){
    return res.render('test');

}


module.exports.check=  async function(req,res){
    let check=await Product.findById({
        title: req.body.test
    })
    if(check){
        console.log(check);
    }else{
        console.log('error in findinf product ')
    }

    
    return res.redirect('back');

}