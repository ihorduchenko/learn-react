import React, {Component} from 'react';
import { render } from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Header from './components/Header';
import Main from './components/Main';
import Posts from './components/Posts';
import PostSingle from './components/PostSingle';
import PlayJs from "./components/PlayJs";
import Articles from "./components/Articles";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header/>
        <main>
          <Switch>
            <Route exact path={'/'} component={Main}/>
            <Route exact path={'/posts'} component={Posts}/>
            <Route exact path={'/posts/:slug'} component={PostSingle}/>
            <Route exact path={'/play-js'} component={PlayJs}/>
            <Route exact path={'/articles'} component={Articles}/>
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;

const routes = (
  <Router>
    <Route path="/" component={App} />
  </Router>
);

render(
  (routes), document.getElementById('root')
);