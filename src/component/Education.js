import React, { Component } from 'react';
import { Col, Grid, Row } from 'react-bootstrap';

export default class Education extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <h3>Education</h3>
          <Col md={8}>
            <h4>Master Degree in Telecom & IT - CNAM Paris</h4>
            <p>Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum.</p>
          </Col>
          <Col md={4}>
            <img/>
          </Col>
        </Row>
      </Grid>
    )
  }
}