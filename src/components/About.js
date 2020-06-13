import React from "react";
import Storage from "./Storage"
class TextArea extends React.Component {
  state = {
    clipStorage: [],
    index: 0,
  }




  onClickCopy=()=> {
    var text = "";
    let stor = [...this.state.clipStorage]
    let x = this.state.index
    if (window.getSelection) {
      text = window.getSelection().toString();
    }
    if (text !== "") {
    stor.push(text)
    this.setState({
      clipStorage: stor,
      index: x+1
    })
    
    } else {
      return null;
    }
  }

 render() {
    return (
      <div>
        
        <div className="container">
          <div ref="textarea" onMouseDown={this.onClickCopy} className="card-panel hoverable">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias laudantium id, rem quos in aliquid asperiores et error perferendis quidem magnam nobis placeat natus deleniti deserunt ea delectus iure earum exercitationem dolores quo accusantium voluptas pariatur culpa? Eveniet ipsa odio exercitationem, quos maxime blanditiis dolorum tempora aspernatur adipisci explicabo repellat quis, neque cupiditate sint dolor ullam rem doloribus maiores assumenda ea, laudantium totam. Id a velit quis quod eaque eum ullam accusamus doloribus explicabo porro? Officia, ea! Nam est veniam et dicta quidem obcaecati in dignissimos sed asperiores vero totam, voluptatem quaerat explicabo. Reiciendis blanditiis accusantium id vitae adipisci aliquid.
          </div>
        </div>
        <Storage clipboards={this.state.clipStorage}/>
      </div>
    );
  }

 
}

export default TextArea;
