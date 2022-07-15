import "./App.css";
import { withAuthenticator } from "@aws-amplify/ui-react";
import HomePage from "./HomePage";
import AboutUs from "./AboutUs";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Profile from "./Profile"
function App({ signOut, user }) {
  return (
    <>
      <NavBar />
      
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Profile" element={<Profile />} />
        </Routes>
      </div>
      <div>
        <p>
          <button onClick={signOut}> Sign out </button>
        </p>
      </div>
    </>
  );
}

export default withAuthenticator(App);
// export default App;
