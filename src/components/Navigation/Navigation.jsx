import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Navigation() {
  return (
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
  );
}

export default Navigation;
