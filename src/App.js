import './App.css';
import {
  withAuthenticator
} from '@aws-amplify/ui-react'

function App({
  signOut,
  user
}) {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <p>
            <h1>Dripdrop</h1>
            {user.attributes.email} {" "}
            <button onClick={signOut}>Sign out</button>
          </p>
        </div>
      </header>{" "}
      <body>
        <div>
          <br></br>
          <button>Upload</button>
        </div>
      </body>
    </div>
  );
}

function uploadImage() {
  
}

export default withAuthenticator(App);