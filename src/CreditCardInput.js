import React, { Component } from 'react';
import {Container, Button, Row, Col, Label, Input} from 'reactstrap';
//import {Link} from 'react-router-dom';
import AMEX from './images/american_express_logo.png'
import Discover from './images/Discover-logo.jpg'
import MasterCard from './images/Mastercard_logo.0.jpg'
import Visa from './images/new_visa_big.gif'


class CreditCardInput extends Component{
    constructor(props){
        super(props);
        this.state = {name: "",
                        email:"", number:"", CreditCardLogo:0};

        this.creditCardInput = this.creditCardInput.bind(this);
        this.handleFormChange = this.handleFormChange.bind(this);


    }
    handleFormChange(event)
    {
        event.persist();
        let tempState = this.state;
        const name = event.target.id;
        const value = event.target.value;
        console.log("event:", event);
        console.log("name:", name);
        console.log("value:", name);
        if(name === "number")
        {
            // console.log(this.creditCardInput(value) + "cc type");
            tempState['CreditCardLogo'] = this.creditCardInput(value);

        }
        tempState[name] = value;
        this.setState(tempState);

    }
    creditCardInput(ccNumber)
    {
        const firstDigit = ccNumber.toString()[0];

        if(firstDigit === "3")
        {
            console.log("AMEX cc Type");
            return AMEX;
        }
        else if(firstDigit === "4") {
            return Visa;
        }
        else if(firstDigit === "5")
        {
            console.log("MasterCard cc Type");
            return MasterCard;
        }
        else if(firstDigit === "7")
        {
            console.log("Discover cc Type");
            return Discover;
        }
        else
        {
            console.log("Unknown cc Type");
            return 0;
        }


    }
    render(){
        return(
            <div>
		        <form>
                    <label>
                        Name:
                        <input type="text" id="name" placeholder="Name" value={this.state.name} onChange={(event)=>this.handleFormChange(event)}></input>
                    </label>
                    <label>
                        email:
                        <input type="email" id="email" placeholder="email@email.com" value={this.state.email} onChange={(event)=>this.handleFormChange(event)}></input>
                    </label>
                    <label>
                        Number:
                        <input type="text" id="number" placeholder={0} value={this.state.number} onChange={(event)=>this.handleFormChange(event)}></input>
                    </label>
                    <div style={{maxHeight:"25px", maxWidth:"35px"}}>
                        {this.state.CreditCardLogo ?
                            <img style={{maxHeight:"50px", maxWidth:"65px"}} src={this.state.CreditCardLogo}/>:<div/>}
                    </div>
                </form>

            </div>

        );
    }
}

export default CreditCardInput;
