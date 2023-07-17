import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import NavMenu from "./Components/NavMenu/NavMenu";
import Home from "./Pages/Home";
import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/SignIn";
import Profile from "./Pages/Profile";
import Events from "./Pages/Events";

function App() {
  return (
    <div className="AppContainer">
      <Router>
        <>
          <NavMenu></NavMenu>
          <Routes>
            <Route path="/" element={<Home></Home>} />
            <Route path="/events" element={<Events></Events>} />
            <Route path="/profile" element={<Profile></Profile>} />
            <Route path="/signin" element={<SignIn></SignIn>} />
            <Route path="/signup" element={<SignUp></SignUp>} />
          </Routes>
        </>
      </Router>
    </div>
  );
}

export default App;
