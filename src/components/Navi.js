import React from 'react'
import { Link } from "react-router-dom"


const Navi=() => {
    return (
        <div>
            <nav className="nav-wrapper blue-grey darken1
            hide-on-med-and-up">
            <Link className="brand-logo " to="/">CyberPaste</Link>
            </nav>
            <nav className="nav-wrapper blue-grey darken1">
              <div className="container">
              <Link className="brand-logo hide-on-small-and-down left" to="/">CyberPaste</Link>
          <ul className="right">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/download">Download</Link>
            </li>
          </ul>
          </div>

          </nav>

   


        </div>
    )
}

export default Navi
