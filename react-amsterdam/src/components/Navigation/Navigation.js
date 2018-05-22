import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './styles.css'

class Navigation extends Component {
  render() {
    return (
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/context-api">New Context API</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ref-api">Updated Ref API</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/lifecycle">Changes in Component Lifecycle</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/strict-mode">Strict Mode</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Navigation;
