import logo from './logo.svg';
import './App.css';
import {
  withAuthenticator
} from '@aws-amplify/ui-react'
import React, { Component } from 'react';
import { Auth } from 'aws-amplify';

async function signOut() {
    try {
        await Auth.signOut();
    } catch (error) {
        console.log('error signing out: ', error);
    }
}

class App extends Component{
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <button onClick={signOut}>sign out</button>
          </div>
          <h3> dripdrop </h3>
        </header>
      </div>
    );
  }
}

export default withAuthenticator(App);