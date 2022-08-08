import './App.css';
import {
  withAuthenticator
} from '@aws-amplify/ui-react'
import React from 'react';
import axios from 'axios'

let appName = 'dripdrop'

function postButton() {
  console.log("button clicked!")
  axios.post("https://s5v8ff7sr8.execute-api.us-east-1.amazonaws.com/dev/image-upload", appName)
}

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
        <button onClick={postButton}> Post to S3 </button>
      </header>
    </div>
  );
}

export default withAuthenticator(App);