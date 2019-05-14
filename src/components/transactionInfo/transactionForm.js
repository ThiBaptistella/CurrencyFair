import React, { Component } from "react";
import Select from 'react-select';

import "./transactionInfo.css";

import Modal from '../modal/modal';

const options = [
  { value: 'euro', label: 'Euro' },
  { value: 'dollar', label: 'Dollar' }
];

class TransactionForm extends Component {
	constructor(props) {
        super(props);
        this.state = {
            value: "",
            youSend: "",
            receiverGets: "",
            code1: "",
            code2: "",
            code3: "",
            code4: "",
            code5: "",
            code6: "",
            selectedOption: null,
            isShowing: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    } 
    openModalHandler = () => {
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
      let {name, value} = e.target;
      this.setState({
        [name]: value,
      
      });
      console.log(e);
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
          <div>
          <form onSubmit={this.handleSubmit}>
            <div className="field">
                <input type="text" name="youSend" id="youSend" placeholder="$1000" />
                <label htmlFor="youSend">You Send</label>
                <div className="flag-container">
                  <select 
                    className="flag"
                    value={this.state.value}
                  >
                    <option value="euro">Euro</option>
                    <option value="dollar">Dollar</option>
                  </select>
                </div>
            </div>
                
            <div className="field">
                <input type="text" name="receiverGets" id="receiverGets" placeholder="£1000" />
                <label htmlFor="receiverGets">receiver gets</label>
                <div className="flag-container">
                  <select 
                  
                    className="flag"
                    value={this.state.value}
                  >
                    <option value="euro">Euro</option>
                    <option value="dollar">Dollar</option>
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
                 

          </Modal></div>
          
        );
    }
}

export default TransactionForm;
