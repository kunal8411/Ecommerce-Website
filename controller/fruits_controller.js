
const Product= require('../models/products')

const Allproducts= require('../models/allproducts');




module.exports.fruits= async function(req,res){
    

    const allproducts= await Allproducts.find({});
    // console.log(allproducts)
    return res.render('fruits',{
        allproducts:allproducts
    })
       
    }
    
