import React, { Component } from "react";
import Home from "./components/Home";
import ClipList from "./components/ClipList";
import Download from "./components/Download";
import Navi from "./components/Navi";
import Footer from "./components/Footer";
import "./App.css";
import ClipContextProvider from "./contexts/ClipContext"



import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  state = {
    clipStorage: [],
  };

 

  render() {
    return (
      <div>
        <div className="page-container">
          <div className="content-wrap">
            <Router>
              <ClipContextProvider>
                <Navi />
                <Switch>
                  <Route exact path="/">
                    <Home />
                  </Route>
                  <Route path="/about">
                    <ClipList/>
                  </Route>
                  <Route path="/download">
                    <Download />
                  </Route>
                </Switch>
              </ClipContextProvider>  
              
              
            </Router>
          </div>

          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
