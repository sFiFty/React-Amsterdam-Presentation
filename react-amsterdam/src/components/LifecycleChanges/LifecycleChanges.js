import React, { Component } from 'react';
import './styles.css';

class LifecycleChangesWrapper extends Component {
  state = {
    value: 'React',
    isImageVisible: true
  }

  onClick = () => {
    setTimeout(() => {
      this.setState({ value: this.state.value + ' is awesome' })
    }, 3000)
  }

  render() {
    const {value, isImageVisible} = this.state
    return (
      <div className="lifecycle-changes">
        {
          isImageVisible &&
          <div className="image-container">
            <span onClick={() => this.setState({ isImageVisible: false })}>X</span>
            <img alt="lifecycle" src={require('../../static/lifecycle.jpg')}/>
          </div>
        }
        {
          !isImageVisible &&
          <Button click={this.onClick} value={value}  />
        }
      </div>
    );
  }
}

class Button extends Component {

  state = {
    fromParent: null
  }

  static getDerivedStateFromProps(nextProps, prevState) {
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
    const {fromParent} = this.state;
    const {click} = this.props
    return (
      <button onClick={click} className="btn btn-success">
        {fromParent}
      </button>
    );
  }
}

export default LifecycleChangesWrapper;

