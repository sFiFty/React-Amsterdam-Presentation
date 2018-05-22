import React, { Component } from 'react';
import './styles.css';

class LifecycleChangesWrapper extends Component {
  state = {
    value: 1
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ value: 2 })
    }, 5000)
  }

  render() {
    const {value} = this.state
    return (
      <div className="lifecycle-changes">
        <LifecycleChanges  value={value}  />
        <div className="image-container">
          <img alt="lifecycle" src={require('../../static/lifecycle.jpg')}/>
        </div>
      </div>
    );
  }
}

class LifecycleChanges extends Component {

  state = {
    fromParent: null
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(nextProps)
    return {
      fromParent: nextProps.value
    }
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    return prevProps.value
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(snapshot)
  }

  render() {
    return (
      <div>
      </div>
    );
  }
}

export default LifecycleChangesWrapper;

