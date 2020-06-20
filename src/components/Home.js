import React from "react";
import "./Home.css";
import ReactPlayer from "react-player";

const Home = () => {
  return (
    <div className="container">
      <div class="card   grey darken-4 center hide-on-small-only">
        <div class="card-content white-text">
          <span class="card-title">
            Simple and intuitional clipboard storage app.
          </span>
        </div>
      </div>

      <div className="player-wrapper center">
        <ReactPlayer
          className="react-player"
          url="https://www.youtube.com/watch?v=hclz1ddr2jQ&t"
          controls="true"
          width="95%"
          height="95%"
        />
      </div>

      <div class="row">
        <div class="col s12 m4">
          <div class="card-panel  grey darken-4 center z-depth-5">
            <i className="material-icons white-text medium center">
              desktop_windows
            </i>
            <br />
            <h5 className="white-text"> Clipboard Storage</h5>
            <span class="white-text">
              Windows clipboard can store only one item and going back to
              previous clipboard with windows manager isn't easy or intuitional.
            </span>
          </div>
        </div>
        <div class="col s12 m4">
          <div class="card-panel  grey darken-4 center">
            <i className="material-icons white-text medium center">keyboard</i>
            <h5 className="white-text"> Predefined messages</h5>

            <span class="white-text">
              With my application, you don't have to type as much as usual, you
              can save as many snippets as you want and call them as your
              favourite drinks for example.
            </span>
          </div>
        </div>
        <div class="col s12 m4">
          <div class="card-panel  grey darken-4 center">
            <i className="material-icons white-text medium center">mail</i>
            <h5 className="white-text">Email templates</h5>

            <span class="white-text">
              Automate your outlook emails or internet forms in few clicks, your
              everyday task will change forever.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
