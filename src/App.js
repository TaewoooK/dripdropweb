import "./App.css";
import { withAuthenticator } from "@aws-amplify/ui-react";
import HomePage from './HomePage'

function App({ signOut, user }) {
  return (
    <>
    <div>
      <p>
        {" "}
        {user.attributes.email} <button onClick={signOut}> Sign out </button>{" "}
      </p>
    </div>
    <HomePage/>

    </>
  );
}

export default withAuthenticator(App);
