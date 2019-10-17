import React, { Component } from 'react';

const { log } = console;

class Sagas extends Component {

  componentDidMount() {
    function *foo(x) {
      var y = 2 * (yield (x + 1));
      var z = yield (y / 3);
      yield (x + y + z);
    }
    
    var it = foo(5);
    
    log(it.next());
    log(it.next(12));
    log(it.next(13));
    log(it.next(1));
  }

  render() {
    return (
      <div className="container py-5">
        <h1 className="display-3 mb-3">Redux Saga</h1>
        <p className="lead">Using Redux Saga</p>
        <hr className="my-4" />
      </div>
    );
  }
}

export default Sagas;