import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class Home extends Component{
  render(){
    return(
      <Route>
        <main className="page-home">
          <div className="jumbotron">
            <div className="container text-center">
              <h1 className="display-4">Hello, world!</h1>
              <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
              <hr className="my-4" />
              <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
              <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
            </div>
          </div>
        </main>
      </Route>
    )
  }
}

export default Home;