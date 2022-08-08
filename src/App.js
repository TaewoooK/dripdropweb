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
          <h1> Drip Drop </h1>{" "}
          <p>
            Edit <code> src / App.js </code> and save to reload.{" "}
          </p>{" "}
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React{" "}
          </a>{" "}
        </header>{" "}
      </div>
    );
  }
}

export default withAuthenticator(App);