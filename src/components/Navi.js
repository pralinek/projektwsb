import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../media/logo.png"
import "./Navi.css"
const Navi = () => {
  return (
    <div class="navbar-fixed">
      <nav className="fixed">
        <div className="container">
          
          <NavLink  to="/">
          <img src={Logo} alt="Paper unicorn" />
          </NavLink>
          <ul className="right">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink
                to="/download"
              >
                Download
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navi;
