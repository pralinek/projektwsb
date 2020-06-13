import React, {Component} from 'react';
import Home from "./components/Home"
import About from "./components/About"
import Download from "./components/Download"
import Navi from "./components/Navi"
import Header from "./components/Header"

import Footer from "./components/Footer"
import "./App.css"

import {
  BrowserRouter as Router,
  Switch,
  Route
  
} from "react-router-dom";



class App extends Component {
  state={
    clipStorage:[]
  } 
  
  onClickCopy=(x)=>{
    
    this.setState({
      clipStorage: x.clipStorage
    })
    console.log(this.state)
    
    
   }

  render(){
    return(
     
     
    <div>
      <div className="page-container">
        <div className="content-wrap">
   <Router>
  <Header />
  <Navi />
   <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About onClickCopy={this.onClickCopy}/>
          </Route>
          <Route path="/download">
            <Download />
          </Route>
        </Switch>
   </Router>
   </div>
   
   <Footer />
   </div>
   </div>
    )

  }
}

export default App;
