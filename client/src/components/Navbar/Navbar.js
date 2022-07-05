import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <h2>WS SHARE</h2>
        </Link>
      </div>
      <div className="navbar-links">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Find</Link>
          </li>
          <li>
            <Link to="/">FAQ</Link>
          </li>
          <li>
            <Link to="/">Terms</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-auth">
        <button className="navbar-auth__signup">Sign Up</button>
      </div>
    </div>
  );
};

export default Navbar;
