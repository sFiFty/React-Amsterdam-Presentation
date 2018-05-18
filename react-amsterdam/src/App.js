import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import './App.css';
import ContextApi from './components/ContextApi/index';
import RefApi from './components/RefApi/index';
import LifecycleChanges from './components/LifecycleChanges';
import StrictMode from './components/StrictMode';
import AsyncMode from './components/AsyncMode';
import Navigation from './components/Navigation';


class App extends Component {
  render() {
    return (
      <div className="App container">
        <Navigation />
        <Route path="/context-api" component={ContextApi} />
        <Route path="/ref-api" component={RefApi} />
        <Route path="/lifecycle" component={LifecycleChanges} />
        <Route path="/strict-mode" component={StrictMode} />
        <Route path="/async-mode" component={AsyncMode} />
        <footer>
          <img src={require('./static/footer.svg')} alt=""/>
        </footer>
      </div>
    );
  }
}

export default App;
