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
            youSend: "",
            receiverGets: "",
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
          <div>
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
              <button className="btn-next" onClick={this.openModalHandler}>Next</button>
            </div>
            
          </form>
         { this.state.isShowing ? <div onClick={this.closeModalHandler} className="back-drop"></div> : null }

            
          <Modal
          className="modal"
              show={this.state.isShowing}
              close={this.closeModalHandler}>
                  Maybe aircrafts fly very high because they don't want to be seen in plane sight?
          </Modal></div>
          
        );
    }
}

export default TransactionForm;
