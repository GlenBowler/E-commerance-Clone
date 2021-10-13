import React, { Component } from 'react'
//import {getBasketTotal} from './reducer';
import './Calculator.css'

export class Calculator extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
             monthly:0,
             amount:0
        }
        //Binding my functions
    this.clickHandler=this.clickHandler.bind(this)
    this.totalHandler=this.totalHandler.bind(this)
      }
      //Functions that will change my values
     clickHandler=(event)=>{
       this.setState({
          monthly:event.target.value
       })
    }
    totalHandler=(e)=>{
      this.setState({
        amount:e.target.value
      })
    }
    
    render() {
        return (
            <div>
              <form>
                <p>Enter the amount for you basket:</p>
                <input type= 'text' value={this.state.amount} onChange={this.totalHandler}/>
                <p>Interest rate: 20% </p>
                <p>Total + 20% : R{(this.state.amount*0.20)+(this.state.amount*1)}</p>
                <p>Please enter amount of months you want to use to pay off</p>
                <input type='text' value={this.state.monthly} onChange={this.clickHandler}/>
              </form>
              <p>Your monthly payment is : R{
              ((this.state.amount*0.20)+(this.state.amount*1))/this.state.monthly
              }</p>
            </div>
        )
    }
}

export default Calculator
