import { Provider } from 'react-redux';
import React, { Component } from 'react';
import Books from './redux/Books';

import { createStore } from 'redux';
import BooksApp from '../reducers/BooksApp';

let store = createStore(BooksApp);
console.log(store.getState());

class ReduxLearn2 extends Component{
  render(){
    return(
      <Provider store={store}>
        <div className="container py-5">
          <Books />
        </div>
      </Provider>
    )
  }
}

export default ReduxLearn2;