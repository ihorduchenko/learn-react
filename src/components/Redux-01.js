import React, { Component } from 'react';
import store from "../store/index";
import { addArticle } from "../actions/index";

import List from './redux/List';
import Form from './redux/Form';

class ReduxLearn1 extends Component{
  render() {
    return (
    	<div className="container my-5">
    		<div className="row">
					<div className="col-md-6">
            <h2>Add new article</h2>
						<Form />
					</div>
          <div className="col-md-6">
            <h2>Articles</h2>
            <List />
          </div>
				</div>
    	</div>
    );
  }
}

store.subscribe(() => console.log('Look ma, Redux!!'));

window.store = store;
window.addArticle = addArticle;

export default ReduxLearn1;
