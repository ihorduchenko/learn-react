import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Header from './components/header';
import Main from './components/main';
import About from './components/about';
import Posts from './components/posts';
import Post from './components/post';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header/>
        <main>
          <Switch>
            <Route exact path={'/'} component={Main}/>
            <Route exact path={'/about'} component={About}/>
            <Route exact path={'/posts'} component={Posts}/>
            <Route exact path={'/posts/:slug'} component={Post} />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
