import React, { Component } from 'react';
import store from "../store/index";
import { addArticle } from "../actions/index";

class ReduxLearn extends Component{
  render() {
    return (
    	<div className="container">
				<div>Redux</div>
    	</div>
    );
  }
}

store.subscribe(() => console.log('Look ma, Redux!!'));

window.store = store;
window.addArticle = addArticle;

export default ReduxLearn;
