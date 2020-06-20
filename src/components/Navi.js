import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../media/logo.png"
import "./Navi.css"
const Navi = () => {



  return (
      <div>
      <div className="navbar hide-on-med-and-up">
      <nav className="notfixed">
        <div>
        <NavLink  to="/">
          <img src={Logo} alt="Paper unicorn" />
          </NavLink>
          <ul className="right">
          
            <li>
              <NavLink to="/" className="center btn-floating grey darken-4 z-depth-5"><i className="material-icons center-align">home</i></NavLink>
            </li>
            <li>
              <NavLink to="/about"className="center btn-floating grey darken-4 z-depth-5"><i className="material-icons center-align">content_cut</i></NavLink>
            </li>
            <li>
              <NavLink
                to="/instructions"className="center btn-floating grey darken-4 z-depth-5"><i className="material-icons center-align">question_answer</i></NavLink>
            </li>
            <li>
              <NavLink
                to="/download"className="center btn-floating grey darken-4 z-depth-5" ><i className="material-icons center-align">cloud_download</i></NavLink>
            </li>
          
          </ul>
           
        </div>
      </nav>
      <br/>
      </div>
    <div className="navbar-fixed hide-on-small-only">
      <nav className="fixed ">
        <div className="container">
          
          <NavLink  to="/">
          <img src={Logo} alt="Paper unicorn" />
          </NavLink>
          <ul className="right">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">Demo</NavLink>
            </li>
            <li>
              <NavLink
                to="/instructions">Instructions</NavLink>
            </li>
            <li>
              <NavLink
                to="/download">Download</NavLink>
            </li>
          
          </ul>
        </div>
      </nav>
    </div>
    </div>
  );
};

export default Navi;
