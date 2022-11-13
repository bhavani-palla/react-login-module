import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="nav-links">
      <ul>
        <li>
          <Link to="/home"> Home </Link>{" "}
        </li>
        <li>
          <Link to="/register"> Register </Link>{" "}
        </li>
        <li>
          <Link to="/login"> Login </Link>{" "}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
