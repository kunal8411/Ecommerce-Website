// console.log("hello");
// import axios from 'axios'



//addtocart will be array of information, we will get array from this line  
let addtocart= document.querySelectorAll('.add-to-cart');
let cartCounter= document.querySelector('#cartCounter');


function updateCart(products){

    //2nd para of function 'PRODUCTS' ==>what data we want to send 
    axios.post('/snacks/update-cart', products).then(res =>{
        console.log(res);
        
        // res.flash('success','successfull added to cart')
        cartCounter.innerHTML= res.data.totalQty;
        new Noty({
            type: 'success',
            timeout:1000,
            progressBar:false, 
            text:'Item added to cart'
        }).show();
    })
    .catch(function (error) {
        console.log(error);
      });
}

addtocart.forEach((btn) =>{
    btn.addEventListener('click',(e) =>{
        

        let products= JSON.parse(btn.dataset.products);
        console.log(products);
        updateCart(products)

    })
} )


