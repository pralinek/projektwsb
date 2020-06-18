import React from 'react'
import "./Home.css"
import ReactPlayer from "react-player"


const Home =() => {
  
    return (
        <div className='container'>
      <div class="card   blue-grey darken-3">
      <div class="card-content white-text">
          <span class="card-title">Everything about it.</span>
          <p>Simple and intuitional clipboard storage app. Be careful! Usage is addicting.</p>
        </div>
      </div>
      <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url='https://www.youtube.com/watch?v=hclz1ddr2jQ&t'
          controls="true"
          width='95%'
          height='95%'
        />
      </div>
      <div className="card blue-grey darken-3">
        <div class="card-content white-text">
        <p>Windows clipboard can store only one item. When you copy something else, previous clipboard contents is owerwritten, going back and searching for previous clipboard is not intuitive.</p>
        <h5>Features</h5>
        <ul className="list">
          <li className="collection-item">Clipboard storage - go back to anything you copied before </li>
          <li className="collection-item">Save clipboards and use the shortcut to paste them everywhere, you don't have to use separate snipping add-ins in Visual Studio Code.</li>
          <li className="collection-item">Create templates where each of the element chosen by you is replaced by correct clipboard.</li>
          <li className="collection-item">Tired of wrting email, create shortcuts for Outlook email templates.</li>
        </ul>
        </div>
      </div>


        
   
      
      </div>
    )
}

export default Home
