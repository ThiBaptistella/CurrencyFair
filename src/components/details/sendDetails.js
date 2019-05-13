import React, { Component } from "react";

import "./sendDetails.css";

class sendDetails extends Component {
	render() {
		return (
			<div className="sendDetails">
                <div className="titleSend">
					<h3>Sending details</h3>
				</div>
				<div className="youSendDetails">
					<span>You send</span>
					<span className="value">£ 3000</span>
				</div>
				<div className="receivingDetails">
					<span>Receiving details</span>
					<a href="/">As of right now</a>
				</div>
				<div className="rateDetails">
					<div>
						<span className="rateValues">Rate</span>
						<span className="values">0.86022</span>
					</div>
					<div>
						<span className="rateValues">Fee</span>
						<span className="values">£2.50</span>
					</div>
					<div>
						<span className="rateValues">Delivrey date</span>
						<span className="values">25th November</span>
					</div>
					<div>
						<span className="rateValues">Recepient gets</span>
						<span className="valuesPrice">£1717.94</span>
					</div>
				</div>
				<div className="bank">
					<span>You save £68.19 compared your bank!</span>
				</div>
			</div>
		);
	}
}

export default sendDetails;
