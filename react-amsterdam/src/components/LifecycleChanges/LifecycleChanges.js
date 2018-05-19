import React, { Component } from 'react';
import './styles.css';

class LifecycleChanges extends Component {
  render() {
    return (
      <div className="lifecycle-changes">
        <div className="image-container">
          <img alt="lifecycle" src={require('../../static/lifecycle.jpg')}/>
        </div>
      </div>
    );
  }
}

export default LifecycleChanges;

