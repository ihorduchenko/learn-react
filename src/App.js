import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import Header from './components/header';
import Main from './components/main';
import About from './components/about';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header/>
        <main>
          <Switch>
            <Route exact path={'/'} component={Main}/>
            <Route exact path={'/about'} component={About}/>
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
