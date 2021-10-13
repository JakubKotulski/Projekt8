import "./Nav.css";
import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  const navStyle = {
    color: "white",
  };
  return (
    <nav>
      <h3>Jakub Kotulski Company</h3>
      <ul className="nav-links">
        <Link style={navStyle} to="/about">
          <li>About</li>
        </Link>
        <Link style={navStyle} to="/tasks">
          <li>Tasks</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
