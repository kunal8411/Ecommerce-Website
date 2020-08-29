




const Dairyproducts= require('../models/dairyproduct');



module.exports.view= async function(req,res){
    const dairy= await Dairyproducts.find({});

//    console.log(dairy)
    
    return res.render('dairyproducts',{
        dairy:dairy
    })
}