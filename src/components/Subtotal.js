import React from 'react';
import CurrencyFormat from 'react-currency-format';
import './Subtotal.css'
import { useStateValue } from './StateProvider';
import {getBasketTotal} from './reducer';
import { ModeCommentSharp } from '@material-ui/icons';
import Calculator from './Calculator';

function Subtotal(){
    //Getting user data from basket
    const[{basket},dispatch]=useStateValue();
    let monthly=0;

    function calculate(mytotal,monthly){
        let total= mytotal;
        let newTotal=(total*0.20)+total;
        return newTotal;
    }
    return (
        <div>
            <div className="subtotal">
                <CurrencyFormat
                    renderText={(value)=>(
                        <>
                            <p>
                                Subtotal ({basket.length}): <strong>{value}</strong>
                            </p>
                            <small className="subtotal_gift">
                                <input type="checkbox"/>This order contains a gift
                            </small>
                        </>
                    )}
                    decimalScale={2}
                    value={getBasketTotal(basket)}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"R"}
                    />{/*Ading of currency format*/}
                    <button>
                        Proceed to subtotal
                    </button>
            </div>

            <div className="Payoff_">
                        <Calculator total={getBasketTotal(basket)}/>
                  
            </div>
         
        </div>
        
    );
}

export default Subtotal;