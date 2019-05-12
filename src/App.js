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

        {/* <pre>
          {
            JSON.stringify(this.props)
          }
        </pre>
        <button onClick={this.simpleAction}>Test redux action</button>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
         */}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);