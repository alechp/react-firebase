import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './style.scss';
import FireTest from '../FireTest';

const propTypes = {
  name: React.PropTypes.string,
};
const defaultProps = {
  name: 'World',
};

class App extends Component {
  render() {
    return (
      <div styleName="App">
        <div styleName="App-header">
          <h2>Welcome to React {this.props.greeting} </h2>
        </div>
        <p styleName="App-intro">
          <FireTest />
        </p>
      </div>
    );
  }
}

App.propTypes = propTypes;
App.defaultProps = defaultProps;

export default CSSModules(App, styles);
