import React, { Component } from "react";
import Select from 'react-select';

import "./transactionInfo.css";

import Modal from '../modal/modal';

class TransactionForm extends Component {
	constructor(props) {
        super(props);
        this.state = {
            currency: "",
            youSend: "",
            receiverGets: "",
            selectedOption: null,
            isShowing: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleInput = this.handleInput.bind(this);
    } 
    // openModalHandler = () => {
    //   this.setState({
    //       isShowing: true
    //   });
    // }
    // closeModalHandler = () => {
    //   this.setState({
    //       isShowing: false
    //   });
    // }
    handleChange = (e) => {
      this.handleInput({
        currency: e.target.value
      })
    }
       
    handleInput(e) {
      this.setState({ ...e }, () => {
        console.log("this.state", this.state);
        
      });
    }
    handleSubmit(e){
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value }, () => { console.log("this.state", this.state); })
        console.log("this.state", this.state);

    }

      render() {
        return (
          <div>
          <form onSubmit={this.handleSubmit}>
            <div className="field">
                <input type="text" name="youSend" id="youSend" placeholder="$1000"   onChange={(e) => {
                  this.handleInput({
                    currency: e.target.value
                  })
                } } value={this.state.currency}/>

              <label htmlFor="youSend">You Send</label>
                <div className="flag-container">
                  <select 
                    onChange={this.handleChange}
                    className="flag"
                  >
                    <option value="£">£</option>
                    <option value="$">$</option>
                  </select>
                </div>
            </div>
            <div className="field">
                <input type="text" name="receiverGets" id="receiverGets" placeholder="$1000" onChange={(e) => {
                  this.handleInput({
                    currency: e.target.value
                  })
                } } value={this.state.currency}/>
                <label htmlFor="receiverGets">receiver gets</label>
                <div className="flag-container">
                  <select 
                    onChange={this.handleChange}
                    className="flag"
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

            
          {/* <Modal
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
                 

          </Modal> */}
          </div>
          
        );
    }
}

export default TransactionForm;
