import React, { Component } from 'react';

class RefApi extends Component {
  constructor(props) {
    super(props);
    /**
     * CREATING REF API HERE
     */
    this.inputRef = React.createRef();
    this.secondInputRef = React.createRef();
  }

  onFocus = () => {
    this.inputRef.current.focus()
  }

  onFocusToSecondInput = () => {
    this.secondInputRef.current.focus()
  }

  render() {
    return (
      <div>
        <h1 className="mb-5 mt-3">Ref API</h1>
        <div className="image-container">
          <h3>Deprecated</h3>
          <img src={require('../../static/old-ref-example.png')} alt="old-ref"/>
        </div>
        <hr/>
        
        <div className="ref-api mt-5">
          <h3>Simple ref</h3>
          <button onClick={this.onFocus} type="button" className="btn btn-info">Focus!</button>
          {/* ASSIGNING REF HERE */}
          <input ref={this.inputRef} type="text" className="form-control mt-3" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
        </div>
        
        <div className="forward-ref mt-5">
          <h3>Forward ref</h3>
          <button onClick={this.onFocusToSecondInput} type="button" className="btn btn-info">Focus!</button>
          {/* FORWARDING REF HERE */}
          <InputWrapper ref={this.secondInputRef} />
        </div>
      </div>

    );
  }
}

/**
 * SENDING REFERENCE
 */
const InputWrapper = React.forwardRef((props, ref) => (
  <input ref={ref} type="text" className="form-control mt-3" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
));

export default RefApi;
