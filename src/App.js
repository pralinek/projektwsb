import React, {Component} from 'react';
import Home from "./components/Home"
import About from "./components/About"
import Download from "./components/Download"
import Navi from "./components/Navi"
import {
  BrowserRouter as Router,
  Switch,
  Route
  
} from "react-router-dom";



class App extends Component {
  render(){
    return(
   <div className="App">
   <Router>
  <Navi />
   <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/download">
            <Download />
          </Route>
        </Switch>

   </Router>
   </div>
    )

  }
}

export default App;
