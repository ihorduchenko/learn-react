import React, {Component} from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';

import Header from './components/default/Header';
import Main from './components/Main';
import Posts from './components/Posts';
import PostSingle from './components/posts/PostSingle';
import Articles from './components/Articles';
import TodosMain from './components/TodosMain';
import Refs from './components/other/Refs';
import Counter from './components/other/Counter';
import Hooks from './components/other/Hooks';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <React.Fragment>
          <Header/>
          <main>
            <Switch>
              <Route exact path='/' component={Main}/>
              <Route exact path='/posts' component={Posts}/>
              <Route exact path='/posts/:slug' component={PostSingle}/>
              <Route exact path='/articles' component={Articles}/>
              <Route exact path='/todos' component={TodosMain}/>
              <Route exact path='/refs' component={Refs}/>
              <Route exact path='/counter' component={Counter}/>
              <Route exact path='/hooks' component={Hooks}/>
            </Switch>
          </main>
        </React.Fragment>
      </Provider>
    );
  }
}

const routes = (
  <Router>
    <Route path="/" component={App}/>
  </Router>
);

render(
  (routes), document.getElementById('root')
);