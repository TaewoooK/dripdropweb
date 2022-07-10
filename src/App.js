import {
  withAuthenticator
} from '@aws-amplify/ui-react'

function App({
  signOut,
  user
}) {
  return null
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <div>
  //         <p>
  //           {" "}
  //           {user.attributes.email}{" "}
  //           <button onClick={signOut}> Sign out </button>{" "}
  //         </p>
  //       </div>{" "}
       
       
  //     </header>{" "}
  //   </div>
  // );
}

export default withAuthenticator(App);