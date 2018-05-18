import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom'
import './App.css';
import ContextApi from './components/ContextApi/index';
import RefApi from './components/RefApi/index';
import LifecycleChanges from './components/LifecycleChanges';
import StrictMode from './components/StrictMode';
import AsyncMode from './components/AsyncMode';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="navigation">
          <ul>
            <li><Link to="/context-api">New Context API</Link></li>
            <li><Link to="/ref-api">Updated Ref API</Link></li>
            <li><Link to="/lifecycle">Changes in Component Lifecycle</Link></li>
            <li><Link to="/strict-mode">Strict Mode</Link></li>
            <li><Link to="/async-mode">Async Mode</Link></li>
          </ul>
        </div>
        <Route path="/context-api" component={ContextApi} />
        <Route path="/ref-api" component={RefApi} />
        <Route path="/lifecycle" component={LifecycleChanges} />
        <Route path="/strict-mode" component={StrictMode} />
        <Route path="/async-mode" component={AsyncMode} />
      </div>
    );
  }
}

export default App;
