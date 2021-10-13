import React from 'react';
import './Header.css'
//Imporitng my icons
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';



function Header(){
    //Getting basket value
    const[{basket},dispatch]=useStateValue();

    return (
        <div className="header">

                <Link to="/">
                    <img className="header_logo" src="mylogo.png" alt="logo"/>
                </Link>

                <div className="header_search">
                    <input class="header_searchInput" type="text"/>
                    <SearchIcon className="header_searchIcon"/>
                </div>

                <div className="header_nav">
                    <Link to='/Login'>
                    <div className="header_option">
                        <span className="header_optionLineOne">Login</span>
                    </div>
                </Link>

                <Link to="/Shopping_cart">
                <div className="header_option">
                    <span className="header_optionLineOne">Shopping Page</span>
                </div>
                </Link>

                <Link to="/terms">
                <div className="header_option">
                    <span className="header_optionLineOne">Terms</span>
                    <span className="header_optionLineTwo">& Conditions</span>
                </div>
                </Link>

                <Link to="/checkout">
                <div className="header_Basket">
                    <ShoppingBasketIcon/>
                    <span className="header_optionLineTwo header_basketCount">{basket?.length}</span>
                </div>
                </Link>
                
            </div>
        </div>
    )
}

export default Header;