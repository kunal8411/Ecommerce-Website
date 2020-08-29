




const Beverage= require('../models/beverage');



module.exports.view= async function(req,res){
    const beverages= await Beverage.find({});

    // console.log(allvegs)
    
    return res.render('beverages',{
        beverages:beverages
    })
}