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
        <h1 className="display-3 mb-3">React Refs demo</h1>
        <p className="lead">Using React Refs to bind focus into text field</p>
        <hr className="my-4" />
        <div className="row">
          <div className="col-md-8">
            <div className="input-group input-group-lg">
              <div className="input-group-prepend">
                <input
                  type="button"
                  className="btn btn-primary"
                  value="Focus the text input"
                  onClick={this.focusTextInput}
                  ref={this.button}
                />
              </div>
              <input
                className="ref-input form-control text-right"
                type="text"
                ref={this.textInput} 
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Refs;