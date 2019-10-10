import React, { Component } from 'react';

class Counter extends Component {
  state = {
    counter: 0,
    countInterval: null
  }

  handleCount() {
    this.setState({
      counter: (this.state.counter < 10) ? (this.state.counter + 1) : 0
    });
  }

  componentDidMount() {
    let countInterval = setInterval(() => {
        this.handleCount();
      }, 1000   
    );
    this.setState({
      countInterval: countInterval
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.countInterval);
  }

  render() {
    const {counter} = this.state;

    return (
      <div className="container py-5">
        <h1 className="display-3 mb-3">Counter</h1>
        <p className="lead">Using React To make simple counter</p>
        <hr className="my-4" />
        <p className="lead">
          Current counter value:
          <strong className="ml-4">
            {counter}
          </strong>
        </p>
      </div>
    );
  }
}

export default Counter;