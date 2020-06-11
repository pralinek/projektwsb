import React from 'react'
import Card from "./Card"

const Home =() => {
    return (
        <div className="container row">
             <a id="scale-demo" href="#!" class="btn-floating btn-large scale-transition">
    <i class="material-icons">add</i>
  </a>


  <a id="scale-demo" href="#!" class="btn-floating btn-large scale-transition scale-out">
    <i class="material-icons">add</i>
  </a>
        <Card className="left"/>
        <Card className="right"/>
        <Card className="left"/>
        <Card className="right"/>
        <Card className="left"/>
        <Card className="right"/>
        <Card className="left"/>
        <Card className="right"/>
      
  </div>
    )
}

export default Home
