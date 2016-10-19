//GEneral
import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import firebase from '../helpers/firebase';


//MUI
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class FireFlexboxMUI extends Component {

  constructor() { 
    super();
    this.state = {
      name: 'Bracelet',
      price: '10'
    };
  }
  componentWillMount() {
    const rootRef = firebase.database().ref().child('shop');
    const itemListRef = rootRef.child('itemList');
    const itemRef = itemListRef.child('item');
    itemRef.update({
      name: 'Braceful',
      price: '$99'
    });
  }

  componentDidMount() {
    const rootRef = firebase.database().ref().child('shop');
    const itemListRef = rootRef.child('itemList');
    const itemRef = itemListRef.child('item'); 
    itemRef.on('value', snap => {
      this.setState({ 
        name: snap.val().name,
        price: snap.val().price
      })
    });
  }

  render() {
    return (
      <MuiThemeProvider>
        <Grid>
          <Row>
            <Col xs={6} md={6} lg={4}>
              <AppBar
                  title="FireFlexboxMUI AppBar"
                  iconClassNameRight="muidocs-icon-navigation-expand-more"
                />
              <h1>{this.state.name}</h1>
            </Col>
            <Col xs={6} md={6} lg={4}>
              <h1>{this.state.price}</h1>
            </Col>
          </Row>
        </Grid>
      </MuiThemeProvider>
    );
  }
}

export default FireFlexboxMUI;
// export default CSSModules(FireFlexboxMUI, styles);