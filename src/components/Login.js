import React from 'react';
import './Login.css';
import {Link} from "react-router-dom";
import { Email } from '@material-ui/icons';

//This page is static and not really doing anything just showing login page
class Login extends React.Component{
    state={
        email:'',
        password:''
    }
    //Function that will handle change (Not working )
    handleChange=(e)=>{
        const {name,value}=e.target
        this.setState({name})
    }
    handleSubmit=(e)=>{

    }
    render(){
    return(
        <div className='login'>
            <Link to ='/'>
                <img className="login_img"src='mylogo.png'/>
            </Link>
        
            <div className="login_container">
                <h1>Sign-in</h1>
                <form>
                    <h5>Email</h5>
                    <input type="text" onChange={this.handleChange} name ='email'/>
                    <h5>Password</h5>
                    <input type="password" onChange={this.handleChange} name='password'/>
                    <button onClick={this.handleSubmit} type="submit"className="login_signInButton">Sign in</button>
                </form>
                <p>
                    By singing in you agree to eZone Terms and Conditions
                    of Use & Sale.
                </p>
                <button className="login_createButton">Create eZone account</button>
            </div>
        </div>
    )
}
}
export default Login