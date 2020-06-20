import React from 'react'


const Footer = () => {
    return(
        <footer className="page-footer transparent">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">About me</h5>
                <p className="grey-text text-lighten-4">I am self-learned solutions developer. Always chasing simpler... that the simplest we can think about.</p>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">Links</h5>
                <ul>
                  <li className="grey-text text-lighten-3">Nowodworska 28/4, Wroclaw</li>
                  <li className="grey-text text-lighten-3">Email: tolech89@gmail.com</li>
                  <li> <a href="https://www.linkedin.com/in/olecht/" className="grey-text text-lighten-3">https://www.linkedin.com/in/olecht/</a></li>
                  <li className="grey-text text-lighten-3">Nowodworska 28/4, Wroclaw</li>
                  
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            &copy;{new Date().getFullYear()} CyberPaste | All rights reserved
            <p className="grey-text text-lighten-4 right">Tomasz Olech</p>
            </div>
          </div>
        </footer>

    )

    
}

export default Footer