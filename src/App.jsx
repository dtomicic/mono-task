import React from "react";
import "./style.css";

import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Home from "./pages/Home/Home";
import Models from "./pages/Models/Models";
import Add from "./pages/Add/Add";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/models" element={<Models />} />
        <Route path="/add/*" element={<Navigate to="/" />} />
        <Route path="/add/models" element={<Add dataType="models" />} />
        <Route path="/add/make" element={<Add dataType="make" />} />
      </Routes>
    </Router>
  );
}

export default App;
