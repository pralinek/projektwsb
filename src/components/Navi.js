import React from 'react'
import { Link } from "react-router-dom"


const Navi=() => {
    return (
        <div>
            <nav>
          <ul>
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
          </nav>
        </div>
    )
}

export default Navi
