


const Vegetables = require('../models/vegetable');


module.exports.view= async function(req,res){
    const allvegs= await Vegetables.find({});

    // console.log(allvegs)
    
    return res.render('vegetables',{
        allvegs:allvegs
    })
}