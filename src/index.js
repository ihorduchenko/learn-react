import React, {Component} from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';

import Header from './components/default/Header';
import Main from './components/Main';
import Posts from './components/Posts';
import PostSingle from './components/posts/PostSingle';
import Articles from "./components/Articles";
import ReduxLearn1 from "./components/Redux-01";
import ReduxLearn2 from "./components/Redux-02";
import PlayJs from "./components/PlayJs";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <React.Fragment>
          <Header/>
          <main>
            <Switch>
              <Route exact path='/' component={Main}/>
              <Route path='/posts' component={Posts}/>
              <Route path='/posts/:slug' component={PostSingle}/>
              <Route path='/articles' component={Articles}/>
              <Route path='/redux-learn-1' component={ReduxLearn1}/>
              <Route path='/redux-learn-2' component={ReduxLearn2}/>
              <Route path='/play-js' component={PlayJs}/>
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