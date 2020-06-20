import React from "react";
import Down from "../Download/CyberPaste.exe";
import "./Download.css";
const Download = () => {
  return (
    <div className="container row center">
      <br />
      <br />
      <br />
      <br />
      <div className="col s3"></div>
      <div className="col s12 m6 center">
        <div className="card teal darken-2 z-depth-5 radius">
          <div class="card-content white-text">
            <span class="card-title">
              <h5>Download the Application</h5>
            </span>
            <br />

            <a
              href={Down}
              download
              className="center btn-floating btn-large grey darken-4 z-depth-5 pulse"
            >
              <i className="material-icons center-align">cloud_download</i>
            </a>

            <br />
            <br />
            <br />
            <h5>Be careful</h5>
            <h5>usage is addictive!</h5>
          </div>
        </div>
      </div>
      <div className="col s3"></div>
    </div>
  );
};

export default Download;
