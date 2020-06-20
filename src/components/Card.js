import React, { Component } from 'react';
import Clipboard from 'react-clipboard.js';
 
class Card extends Component {
  render() {
    return (
      <Clipboard data-clipboard-text="I'll be copied">
        copy to clipboard
      </Clipboard>
    );
  }
}

export default Card