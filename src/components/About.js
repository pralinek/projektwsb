import React, { Component } from "react";

class TextArea extends React.Component {
 
  render() {
    return (
      <div>
        
        <div>
          <div ref="textarea" onMouseDown={this.onClickMakeBold} className="card-panel hoverable">
            tomek
          </div>
        </div>
      </div>
    );
  }

  onClickMakeBold() {
    console.log(getSelectionText());
  }
}
function getSelectionText() {
  var text = "";

  if (window.getSelection) {
    text = window.getSelection().toString();
  }
  if (text !== "") {
    return text;
  } else {
    return null;
  }
}

export default TextArea;
