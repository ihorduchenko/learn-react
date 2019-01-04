import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <div className="container"> 
          <NavLink className="navbar-brand" exact to="/">Learn React/Redux</NavLink>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                  aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav w-100">
              <li className="nav-item">
                <NavLink exact className="nav-link" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/posts">WP posts</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/articles">JSON posts</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/redux-learn-1">Redux 1</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/redux-learn-2">Redux 2</NavLink>
              </li>
              <li className="nav-item ml-md-auto">
                <a target="_blank" rel="noopener noreferrer" className="nav-link" href="http://ihorduchenko.cloudaccess.host">Author's site</a>
              </li>  
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Header;