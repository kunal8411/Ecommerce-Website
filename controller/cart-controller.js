


//return json data cauz we have used axios on button click==>AJAX request 
module.exports.update= function(req,res){
    //frist time creating cart and adding basic structure to that cart 
    if(!req.session.cart){
        req.session.cart={
            items:{},
            totalQty:0,
            totalPrice:0 
        }
    }
    let cart= req.session.cart;
    if(!cart.items[req.body._id]){
        cart.items[req.body._id]={
            items:req.body,
            qty:1
        }
        cart.totalQty=cart.totalQty + 1;
        cart.totalPrice=cart.totalPrice + req.body.price
    }else{
        cart.items[req.body._id].qty =  cart.items[req.body._id].qty+1;
        cart.totalQty= cart.totalQty+1;
        cart.totalPrice= cart.totalPrice+ req.body.price

    }
    
    return res.json({
        totalQty:req.session.cart.totalQty
    })
}

module.exports.checkout= function(req,res){
    return res.render('../views/cart');
}

module.exports.buynow = function(req,res){
    return res.render('../views/checkout')
}