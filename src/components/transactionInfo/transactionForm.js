import React, { Component } from "react";

import "./transactionInfo.css";

import Modal from '../modal/modal';

class TransactionForm extends Component {
	constructor(props) {
        super(props);
        this.state = {
            currencyYouSend: "",
            currencyReceiverGets:"",
            youSend: "",
            receiverGets: "",
            selectedOption: null,
            isShowing: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleInput = this.handleInput.bind(this);
    } 
    openModalHandler = (e) => {
      e.preventDefault();
      this.setState({
          isShowing: true
      });
    }
    closeModalHandler = () => {
      this.setState({
          isShowing: false
      });
    }
    handleChange = (e) => {
      this.handleInput({ [e.target.name]: e.target.value }, () => { console.log(this.state); })
    }
    handleInput(e) {
      this.setState({ ...e }, () => {
        console.log("this.state", this.state);
        
      });
    }


      render() {
        return (
          <div>
          <form>
            <div className="field">
              <input type="text" name="youSend" id="youSend" placeholder="$1000" value={this.state.currencyYouSend} onChange={(e) => {
                  this.handleInput({
                    currencyYouSend: e.target.value,
                    youSend: e.target.value
                  })
                } } />

              <label htmlFor="youSend">You Send</label>
                <div className="flag-container">
                  <select 
                    onChange={this.handleChange}
                    className="flag"
                    name="currencyYouSend"
                  >
                    <option value="£">£</option>
                    <option value="$">$</option>
                  </select>
                </div>
            </div>
            <div className="field">
                <input type="text" name="receiverGets" id="receiverGets" placeholder="$1000" value={this.state.currencyReceiverGets} onChange={(e) => {
                  this.handleInput({
                    currencyReceiverGets: e.target.value,
                    receiverGets: e.target.value
                  })
                } }/>
                <label htmlFor="receiverGets">receiver gets</label>
                <div className="flag-container">
                  <select 
                    onChange={this.handleChange}
                    className="flag"
                    name="currencyReceiverGets"
                  >
                    <option value="£">£</option>
                    <option value="$">$</option>
                  </select>
                </div>
            </div>
            <div className="field">
              <button className="btn-next" onClick={this.openModalHandler}>Next</button>
            </div>
            
          </form>
         { this.state.isShowing ? <div onClick={this.closeModalHandler} className="back-drop"></div> : null }

          <Modal
              show={this.state.isShowing}
              close={this.closeModalHandler}>
                <div className="code-container">
                  <p>Enter your code sent via SMS to <span className="prefix">+353</span><span className="phone"> 872251177</span></p>
                  <input className="code" type="text" name="code1" onChange={this.handleChange} />
                  <input className="code" type="text" name="code2" onChange={this.handleChange} />
                  <input className="code" type="text" name="code3" onChange={this.handleChange} />
                  <input className="code" type="text" name="code4" onChange={this.handleChange} />
                  <input className="code" type="text" name="code5" onChange={this.handleChange} />
                  <input className="code" type="text" name="code6" onChange={this.handleChange} />
                  <div className="receive-container">
                    <a className="newCode" href="/">Receive a new code</a>
                    <a className="callCode" href="/">Receive code via call instead</a>
                  </div>
                </div>
          </Modal>
          </div>
          
        );
    }
}

export default TransactionForm;
