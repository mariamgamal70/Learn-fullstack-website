import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
//bootstrap icons
import "bootstrap-icons/font/bootstrap-icons.css";
import "fontkiko/css/kiko-all.css";

import Homepage from "./Homepage/Homepage";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Profile from "./Profile";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
