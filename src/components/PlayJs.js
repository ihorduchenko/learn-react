import React, {Component} from 'react';

class PlayJs extends Component {
  componentWillMount() {

  }

  render() {
    let fruits = ["Banana", "Orange", "Apple", "Mango"];
    let mapping = Array.prototype.map;

    let cold = ['autumn', 'winter'];
    let warm = ['spring', 'summer'];
    console.log([...cold, ...warm]);

    cold.push(...warm);
    console.log(cold);

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