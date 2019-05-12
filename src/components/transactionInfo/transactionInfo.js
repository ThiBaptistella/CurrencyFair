import React, { Component } from "react";

import "./transactionInfo.css";

class transactionInfo extends Component {
	render() {
		return (
			<div className="transactionInfo">
                <ul class="progress">
                    <li class="active">Step 1 <span>Transaction info</span></li>
                    <li>Step 2 <span>Recepient info</span></li>
                    <li>Step 3 <span>Make payment </span></li>
                </ul>
                <div className="transaction-input">
                    <h2>Let's set up your transaction!</h2>
                    <p>Specify the amount to be sent or received.</p>
                </div>
			</div>
		);
	}
}

export default transactionInfo;
