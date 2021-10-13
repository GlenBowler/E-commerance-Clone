import React from "react";
import './Checkout.css';
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from './CheckoutProduct';

function Checkout(){
    const[{basket}, dispatch]=useStateValue();
    return(
        <div className="checkout">
            <div className="checkout_left">
               <div>
                   <h2 className="checkout_title">
                    Your shopping Basket from eZone
                   </h2>
                   {/*map that will return us the items to our basket */}
                  {basket.map (item=>(
                      <CheckoutProduct
                      title={item.title}
                      image={item.image}
                      price={item.price}
                      rating={item.rating}
                      />
                  ))}
               </div>
            </div>
            <div className="checkout_right">
                <Subtotal/>
           
            </div>
        </div>
    )
}
export default Checkout;