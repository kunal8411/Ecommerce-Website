




const Milk= require('../models/milk');
const Vegetables= require('../models/vegetable');



module.exports.view= async function(req,res){
    const milk= await Milk.find({});

    //  console.log(milk)
    
    return res.render('milk',{
        milk:milk
    })
}