import React, { Component } from 'react';

class RefApi extends Component {
  constructor(props) {
    super(props);
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
        <div className="ref-api mt-5">
          <h3>Simple ref</h3>
          <button onClick={this.onFocus} type="button" className="btn btn-info">Focus!</button>
          <input ref={this.inputRef} type="text" className="form-control mt-3" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
        </div>
        <div className="forward-ref mt-5">
          <h3>Forward ref</h3>
          <button onClick={this.onFocusToSecondInput} type="button" className="btn btn-info">Focus!</button>
          <InputWrapper ref={this.secondInputRef} />
        </div>
      </div>

    );
  }
}

const InputWrapper = React.forwardRef((props, ref) => (
  <input ref={ref} type="text" className="form-control mt-3" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
));

export default RefApi;
