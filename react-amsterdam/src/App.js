import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import './App.css';
import ContextApi from './components/ContextApi/index';
import RefApi from './components/RefApi/index';
import LifecycleChanges from './components/LifecycleChanges';
import StrictMode from './components/StrictMode';
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
        <footer>
          <img src={require('./static/footer.svg')} alt=""/>
          <div className="mt-3 d-flex justify-content-between">
            <span>Oleksandr Rudin © 2018</span>
            <span>3Shape</span>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
