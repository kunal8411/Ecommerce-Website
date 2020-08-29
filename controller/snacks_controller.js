




const Snacks= require('../models/snack');



module.exports.view= async function(req,res){
    const snacks= await Snacks.find({});

    // console.log(allvegs)
    
    return res.render('snacks',{
        snacks:snacks
    })
}