import React from 'react';
import './Product.css';
import {useStateValue} from "./StateProvider"
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import StarIcon from '@material-ui/icons/Star';

function Product({title,image,price,rating}){

    //const [state,dispatch]=useStateValue();
const[{basket}, dispatch]=useStateValue();
console.log("this basket",basket);//Printing out basket in console to show current basket

    const addToBasket=() =>{
        //dispatch item to into data layer
        dispatch({
            type:'ADD_TO_BASKET',
            item:{
                title:title,
                image:image,
                price:price,
                rating:rating
            },
        });
    }

    return(
    <div className="product">
        <img src={image} alt=""/>
        <div className="product_info">
            <p>{title}</p>
            <p className="product_price">
                R{price}
            </p>
        </div>
        <div className="product-rating">
            {Array(rating)
            .fill()
            .map((_,i)=>(
                <p><StarIcon/></p>
            ))
            }
        </div>
        <button onClick={addToBasket}><ShoppingBasketIcon/>Add to Basket</button>
    </div>
    )}
export default Product; 