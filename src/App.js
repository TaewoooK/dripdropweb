import logo from './logo.svg';
import './App.css';
import {
  withAuthenticator
} from '@aws-amplify/ui-react'
import React, { Component } from 'react';
import { Auth } from 'aws-amplify';

let appName = 'dripdrop'

function App({
  signOut,
  user
}) {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <p>
            {user.attributes.email}
            <button onClick={signOut}> Sign out </button>
          </p>
        </div>
        <h3> {appName} </h3>
      </header>
    </div>
  );
}

export default withAuthenticator(App);