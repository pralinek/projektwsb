import React, { useState, useContext } from "react";
import { ClipContext } from "../contexts/ClipContext";
import Clipboard from 'react-clipboard.js';
import uuid from "uuid/v1";
import Card from "./Card"

const ClipList = () => {
  const [clips, setClips] = useState([]);
  const [count, setCount] = useState(1)
  const { clipList } = useContext(ClipContext);
  
  const addClip = () => {
    let text = "";
    
    
    if (window.getSelection) {
      text = window.getSelection().toString();
    }
    if (text !== "") {
      setCount(count + 1)
      setClips([...clips, {clip: text, id: uuid() }]);
      clipList.push({index:count, clip: text, id: uuid() })
    }
  };

  const setZero = () =>{
    setCount(1)
  }

  const List = clipList.slice(clipList.length-4,clipList.length).map((x) => {
    return (
      <li  className="collection-item truncate"><div>{x.index}.{x.clip}<Clipboard className="secondary-content"  onClick={()=>setZero()} data-clipboard-text={x.clip}><i className="material-icons">send</i></Clipboard></div></li>
    )
  });
  
  
  
  return (
    <div className="container row">
    <ul className="collection col s12 m6">
     {List}
    </ul>
      <div onMouseDown={addClip} className="grey darken-4 white-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
        laudantium id, rem quos in aliquid asperiores et error perferendis
        quidem magnam nobis placeat natus deleniti deserunt ea delectus iure
        earum exercitationem dolores quo accusantium voluptas pariatur culpa?
        Eveniet ipsa odio exercitationem, quos maxime blanditiis dolorum tempora
        aspernatur adipisci explicabo repellat quis, neque cupiditate sint dolor
        ullam rem doloribus maiores assumenda ea, laudantium totam. Id a velit
        quis quod eaque eum ullam accusamus doloribus explicabo porro? Officia,
        ea! Nam est veniam et dicta quidem obcaecati in dignissimos sed
        asperiores vero totam, voluptatem quaerat explicabo. Reiciendis
        blanditiis accusantium id vitae adipisci aliquid.
      </div>

      

    </div>
  );
};

export default ClipList;
