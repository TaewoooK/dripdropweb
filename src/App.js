import logo from './logo.svg';
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
            {" "}
            {user.attributes.email}{" "}
            <button onClick={signOut}> Sign out </button>{" "}
          </p>
        </div>{" "}
        <img src={logo} className="App-logo" alt="logo" />
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

export default withAuthenticator(App);