import React, { Component } from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
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
          <Card>
            <CardHeader
              title="Without Avatar"
              subtitle="Subtitle"
              actAsExpander={true}
              showExpandableButton={true}
            />
            <CardActions>
              <FlatButton label="Action1" />
              <FlatButton label="Action2" />
            </CardActions>
            <CardText expandable={true}>
              {this.state.status}
            </CardText>
          </Card>
      </MuiThemeProvider>
    );
  }
}

export default MUI;