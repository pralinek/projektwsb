import React, { useState, useContext } from "react";
import { ClipContext } from "../contexts/ClipContext";
import uuid from "uuid/v1";

const ClipList = () => {
  const [clips, setClips] = useState([]);
  const { clipList } = useContext(ClipContext);

  const addClip = () => {
    let text = "";

    if (window.getSelection) {
      text = window.getSelection().toString();
    }
    if (text !== "") {
      setClips([...clips, {clip: text, id: uuid() }]);
      clipList.push({clip: text, id: uuid() })
    }
  };

  const List = clipList.map((x) => {
    return (
    <div key={x.id}>
      <p>{x.clip}</p>
    </div>
    )
  });
  
  
  
  return (
    <div>
      {List}
      
      <div onMouseDown={addClip}>
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
