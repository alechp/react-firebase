import React, { Component } from 'react';
import firebase from '../helpers/firebase';

class FireTest extends Component {

  constructor() { 
    super();
    this.state = {
      test: "this will be overwritten by componentDidMount()"
    }
  }
  /* 
    TODO: right now the only way to see this test is to physically change the value in firebase. Add update method component which will push a new time/date to Firebase for the state to read in.
  */
  componentDidMount() { 
    const rootRef = firebase.database().ref().child('react');
    rootRef.on('value', snap => {
      this.setState({
        test: snap.val()
      })
    });
  }
  render() {
    return (
      <div className="FireTest">
        {this.state.test}
      </div>
    );
  }
}

export default FireTest;
