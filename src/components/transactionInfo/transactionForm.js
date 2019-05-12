import React, { Component } from "react";

import "./transactionInfo.css";

class TransactionForm extends Component {
	constructor(props) {
        super(props);
        this.state = {
            youSend: "",
            receiverGets: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    } 
        
    handleSubmit(e){
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value });
        console.log(e);
        //Send state to the server code
    }

      render() {
        return (
          <form onSubmit={this.handleSubmit}>
            {/* <input className="youSend" name="youSend" type="text"/>
            <input className="receiverGets" name="receiverGets" type="text"/> */}
            <div class="field">
                <input type="text" name="youSend" id="youSend" placeholder="$1000" />
                <label for="youSend">You Send</label>
            </div>
                
            <div class="field">
                <input type="email" name="receiverGets" id="email" placeholder="jane.appleseed@example.com" />
                <label for="email">Email</label>
            </div>
            
            <button className="btn-next">Next</button>
          </form>
        );
    }
}

export default TransactionForm;
