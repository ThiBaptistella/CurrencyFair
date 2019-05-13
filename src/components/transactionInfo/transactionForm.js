import React, { Component } from "react";
import Select from 'react-select';

import "./transactionInfo.css";

const options = [
  { value: 'euro', label: 'Euro' },
  { value: 'dollar', label: 'Dollar' }
];

class TransactionForm extends Component {
	constructor(props) {
        super(props);
        this.state = {
            youSend: "",
            receiverGets: "",
            selectedOption: null,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    } 

    handleChange = (selectedOption) => {
      this.setState({ selectedOption });
      console.log(`Option selected:`, selectedOption);
    }
        
    handleSubmit(e){
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value });
        console.log(e);
        //Send state to the server code
    }

      render() {
        const { selectedOption } = this.state;
        return (
          <form onSubmit={this.handleSubmit}>
            <div className="field">
                <input type="text" name="youSend" id="youSend" placeholder="$1000" />
                <label htmlFor="youSend">You Send</label>
                <div className="flag-container">
                  <select className="flag">
                    <option value="volvo">Euro</option>
                    <option value="saab">Dollar</option>
                  </select>
                </div>
            </div>
                
            <div className="field">
                <input type="text" name="receiverGets" id="receiverGets" placeholder="£1000" />
                <label htmlFor="receiverGets">receiver gets</label>
                <div className="flag-container">
                  <select className="flag">
                    <option value="volvo">Euro</option>
                    <option value="saab">Dollar</option>
                  </select>
                </div>
            </div>
           
    
              
         
            <div className="field">
              <button className="btn-next">Next</button>
            </div>
            
          </form>
        );
    }
}

export default TransactionForm;
