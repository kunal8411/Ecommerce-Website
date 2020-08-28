
const Product= require('../models/products')

const Allproducts= require('../models/allproducts');


module.exports.home= async function(req,res){
    // const products=await Product.find({});
    // console.log(products);

    // const allproducts= await Allproducts.find({});
    // console.log(allproducts)
    return res.render('../views/index');
    
}
// ,{
//     products:allproducts
// }
module.exports.fruits=  function(req,res){
    return res.render('../views/fruits');

}