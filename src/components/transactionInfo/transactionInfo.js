import React, { Component } from "react";

import "./transactionInfo.css";
import TransactionForm from "./transactionForm";
const footerStyle = {
    float: "right"
  };
class transactionInfo extends Component {
	render() {
		return (
			<div className="transactionInfo">
                <ul className="progress">
                    <li className="active">Step 1 <span>Transaction info</span></li>
                    <li>Step 2 <span>Recepient info</span></li>
                    <li>Step 3 <span>Make payment </span></li>
                </ul>
                <div className="transaction-input">
                    <h2>Let's set up your transaction!</h2>
                    <p>Specify the amount to be sent or received.</p>
                    <TransactionForm />
                </div>
             
                <ul className="footerTransaction">
                    <li>&copy; 2016 CurrencyFair</li>
                    <li style={footerStyle}><a href="/">Help & Support</a></li>
                    <li style={footerStyle}><a href="/">Legal Stuff</a></li>
                </ul>
              
			</div>
		);
	}
}

export default transactionInfo;
