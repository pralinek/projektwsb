import React from 'react'


const Footer = () => {
    return(
        <footer className="page-footer transparent">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">About me</h5>
                <p className="grey-text text-lighten-4">I am self-learned solutions developer. Always chasing simpler solution that the simplest we can think about.</p>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">Links</h5>
                <ul>
                  <li><a className="grey-text text-lighten-3" href="#">Nowodworska 28/4, Wroclaw</a>/a></li>
                  <li><a className="grey-text text-lighten-3" href="#">Phone number: 797710169</a></li>
                  <li><a className="grey-text text-lighten-3" href="#">Email: tolech89@gmail.com </a></li>
                  <li><a className="grey-text text-lighten-3" href="#">https://www.linkedin.com/in/olecht/</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            &copy;{new Date().getFullYear()} CyberPaste | All rights reserved
            <a className="grey-text text-lighten-4 right" href="#">Tomasz Olech</a>
            </div>
          </div>
        </footer>

    )

    
}

export default Footer