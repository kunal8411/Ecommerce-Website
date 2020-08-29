// console.log("hello");
// import axios from 'axios'



//addtocart will be array of information, we will get array from this line  
let addtocart= document.querySelectorAll('.add-to-cart');
let cartCounter= document.querySelector('#cartCounter');


function updateCart(products){

    //2nd para of function 'PRODUCTS' ==>what data we want to send 
    axios.post('/fruits/update-cart', products).then(res =>{
        console.log(res);
        
        // res.flash('success','successfull added to cart')
        cartCounter.innerHTML= res.data.totalQty;
    })
    .catch(function (error) {
        console.log(error);
      });
}

addtocart.forEach((btn) =>{
    btn.addEventListener('click',(e) =>{
        // console.log(e);
        // let products= btn.dataset.products; //this will be string, to access attributes we need to convert that into object
        // let products= JSON.parse(btn.dataset.products);
        // console.log(products);

        let products= JSON.parse(btn.dataset.products);
        console.log(products);
        updateCart(products)

    })
} )


