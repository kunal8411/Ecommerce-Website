




const Biscuit= require('../models/biscuit');
// const Veg= require('../models/vegetable');



module.exports.view= async function(req,res){
    const biscuits= await Biscuit.find({});

      console.log(biscuits)
    
    return res.render('biscuits',{
        biscuits:biscuits
    })
}