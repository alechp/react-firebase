import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

class Flexbox extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12} md={6} lg={4}>
            <h1>Lorem Ipsum Ish</h1>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <h1>Substantial Dolor</h1>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Flexbox;