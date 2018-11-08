import React, {Component} from 'react';

class PlayJs extends Component {
  componentWillMount() {

  }

  render() {
    let fruits = ["Banana", "Orange", "Apple", "Mango"];
    let mapping = Array.prototype.map;

    return (
      <div className="container">
        <div className="py-5">
          {mapping.call(fruits, (fruit, i) => <div key={i}>{fruit}</div>)}
        </div>
      </div>
    )
  }
}

export default PlayJs;