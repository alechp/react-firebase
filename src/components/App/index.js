import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './style.scss';

// const propTypes = {
//   name: React.PropTypes.string,
// };
// const defaultProps = {
//   name: 'World',
// };

class App extends Component {
  render() {
    return (
      <div styleName="App">
        <div styleName="App-header">
          <h2>Welcome to React</h2>
        </div>
        <p styleName="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default CSSModules(App, styles);
