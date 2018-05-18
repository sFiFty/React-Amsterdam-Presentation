import React, { Component } from 'react';

const Context = React.createContext('light');
class ContextApi extends Component {
  state = {
    language: 'english'
  }

  onChangeLanguage = language => {
    this.setState({ language: language })
  }

  render() {
    const {language} = this.state
    return (
      <Context.Provider value={this.state.language}>
        <div className="btn-group btn-group-toggle" data-toggle="buttons">
          <label className={`btn btn-secondary ${language === 'english' ? 'active' : ''}`}>
            <input onChange={() => { this.onChangeLanguage('english') }} type="radio" name="english" id="english" autoComplete="off" checked={language === 'english'} /> ENG
          </label>
          <label className={`btn btn-secondary ${language === 'ukrainian' ? 'active' : ''}`}>
            <input onChange={() => { this.onChangeLanguage('ukrainian') }} type="radio" name="ukrainian" id="ukrainian" autoComplete="off" checked={language === 'ukrainian'} /> UA
          </label>
        </div>
        <div className="context-api">
          <ButtonWrapper />
        </div>
      </Context.Provider>
    );
  }
}

class ButtonWrapper extends React.Component {
  render() {
    return (
      <Button />
    );
  }
}

class Button extends React.Component {
  render() {
    return (
      <Context.Consumer>
        {language => <button className="btn btn-success">{language === 'english' ? 'Push the button' : 'Кнопка натискати'}</button>}
      </Context.Consumer>
    );
  }
}

export default ContextApi;

