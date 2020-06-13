import React from 'react'
import {NavLink } from "react-router-dom"


const Navi=() => {
    return (
        <div>
            <nav className="nav-wrapper blue-grey darken1
            hide-on-med-and-up transparent">
            <NavLink className="brand-logo " to="/">CyberPaste</NavLink>
            </nav>
            <nav className="nav-wrapper yellow darken-2">
              <div className="container">
              <NavLink className="brand-logo hide-on-small-and-down left" to="/">CyberPaste</NavLink>
          <ul className="right">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/download" className="btn-floating  teal accent-4 z-depth-0">
                <i className="material-icons">cloud_download</i>
              </NavLink>
            </li>
          </ul>
          </div>

          </nav>

   


        </div>
    )
}

export default Navi
