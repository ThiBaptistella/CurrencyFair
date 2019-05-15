import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';

import { simpleAction } from './actions/simpleAction'

// Import all components
import NavBar from './components/header/navBar'
import TransactionInfo from './components/transactionInfo/transactionInfo'
import SendDetails from './components/details/sendDetails'

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
})

const mapStateToProps = state => ({
  ...state
})

class App extends Component {

  simpleAction = (event) => {
    this.props.simpleAction();
  }

  render() {
    return (
      <div className="App">
          <NavBar />
          <div className="container">
            <div className="left-content"> 
            <TransactionInfo />
            </div>
            <div className="right-content"> 
            <SendDetails />
            </div>
          </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);