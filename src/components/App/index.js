import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './style.scss';
import FireTest from '../Examples/FireTest';
import Flexbox from '../Examples/Flexbox';
import MUI from '../Examples/MUI';
import FireFlexboxMUI from '../Examples/FireFlexboxMUI';


const propTypes = {
  name: React.PropTypes.string,
};
const defaultProps = {
  name: 'World',
};

/*
  FireTest = set state value on database update
  Flexbox = demonstrate Grid, Row, Col
  MUI = demonstrate app bar and MUI theme
  FireFlexboxMUI = FireTest + Flexbox + MUI combined
  }
*/

class App extends Component {
  render() {
    return (
      <div styleName="App">
        <FireTest />
        <FireFlexboxMUI />

      </div>
    );
  }
}

App.propTypes = propTypes;
App.defaultProps = defaultProps;

export default CSSModules(App, styles);
