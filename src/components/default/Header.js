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
                <NavLink className="nav-link" to="/posts">WP posts</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/articles">JSON posts</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/todos">TODO's</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/refs">Refs</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/counter">Counter</NavLink>
              </li>
              <li className="nav-item ml-md-auto">
                <a target="_blank" rel="noopener noreferrer" className="nav-link" href="https://ihorduchenko.cloudaccess.host">My site</a>
              </li>  
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Header;