import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../media/logo.png"
import "./Navi.css"
const Navi = () => {
  return (
    <div class="navbar-fixed">
      <nav className="fixed">
        <div className="container">
          

          <img src={Logo} alt="Paper unicorn" className="hide-on-small-only"/>
          
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
                className="btn-floating  teal accent-4 z-depth-0"
              >
                <i className="material-icons">cloud_download</i>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navi;
