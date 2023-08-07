import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Models from "../../pages/Models/Models";
import "./style.css";
import Home from "../../pages/Home/Home";

function Navigation() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Makes</Link>
          </li>
          <li>
            <Link to="/models">Models</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/models" element={<Models />} />
      </Routes>
    </>
  );
}

export default Navigation;
