import React, { Component, StrictMode } from 'react';

class StrictModeWrapper extends Component {
  render() {
    return (
      <StrictMode>
        <InnerStrictMode />
      </StrictMode>
    );
  }
}
class InnerStrictMode extends Component {

  componentWillMount() {

  }

  componentWillUpdate() {

  }

  componentWillReceiveProps() {
    
  }

  render() {
    return (
      <StrictMode>
        <div ref="ref" className="strict-mode">
        <h3>StrictMode currently helps with:</h3>
        <ul className="list-group">
          <li className="list-group-item">Identifying components with unsafe lifecycles</li>
          <li className="list-group-item">Warning about legacy string ref API usage</li>
          <li className="list-group-item">Detecting unexpected side effects</li>
        </ul>
      </div>
      </StrictMode>
    );
  }
}

export default StrictModeWrapper;
