import React, {Component} from 'react';
import { Router, Route, NavLink } from "react-router-dom";

class Header extends Component{
  render(){
    return(
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <NavLink className="navbar-brand" to="/">Navbar</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/posts">Posts</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/play-js">Play JS</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/articles">Articles</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Header;