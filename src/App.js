import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Header from './components/Header';
import Main from './components/Main';
import About from './components/About';
import Posts from './components/Posts';
import Post from './components/Post';
import PlayJs from "./components/PlayJs";
import Articles from "./components/articles/Articles";

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
            <Route exact path={'/posts/:slug'} component={Post}/>
            <Route exact path={'/play-js'} component={PlayJs}/>
            <Route exact path={'/articles'} component={Articles}/>
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
