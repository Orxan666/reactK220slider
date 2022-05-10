import React from "react";
import { Link } from "react-router-dom";
import './header.scss'
const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="d-flex align-items-center justify-content-between">
          <div className="logo">
            <h1>LOGO</h1>
          </div>
          <ul className="nav-menu m-0 p-0 d-flex list-unstyled">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
