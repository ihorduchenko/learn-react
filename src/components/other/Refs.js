import React, { Component } from 'react';

class Refs extends Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
    this.button = React.createRef();
    this.focusTextInput = this.focusTextInput.bind(this);
  }

  focusTextInput() {
    console.log(this.textInput.current.className);
    console.log(this.button);
    this.textInput.current.focus();
    this.textInput.current.value = 'Predefined value';
  }

  render() {
    return (
      <div className="container py-5">
        <input
          className="ref-input"
          type="text"
          ref={this.textInput} />

        <input
          type="button"
          value="Focus the text input"
          onClick={this.focusTextInput}
          ref={this.button}
        />
      </div>
    );
  }
}

export default Refs;