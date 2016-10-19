import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class MUI extends Component { 
  constructor() {
    super();
    this.state = {
      status: 'Loading'
    };
  }

  componentDidMount() { 
    this.setState({
      status: 'Loaded'
    })
  }

  render() { 
    return (
      <MuiThemeProvider>
        <Appbar 
          title="Material UI Example"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
      </MuiThemeProvider>
    );
  }
}