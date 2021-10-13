import React from 'react';
import './CheckoutProduct.css';
import {useStateValue} from "./StateProvider"

function CheckoutProduct({image,price,rating,title}){
    //Accessing the basket
    const[{basket}, dispatch]=useStateValue();

    const removeFromBasket=()=>{
        //remove item from basket
        dispatch({
            type:'REMOVE_FROM_BASKET',
            title:title,
        })
    }
    //Return all the products that you added to your basket
    return(
        <div className="checkoutProduct">
            <img className="checkoutProduct_image" src={image}/>
            <div className="checkoutProduct_info">
                <p className="checkoutProduct_title">{title}</p>
                <p className ="checkoutProduct_price">R{price}</p>
                <p className ="checkoutProduct_rating">Rating: {rating}</p>
                <button onClick={removeFromBasket}>Remove from Basket</button>
            </div>
        </div>

    )
}

export default CheckoutProduct;