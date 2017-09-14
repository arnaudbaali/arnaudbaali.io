import React, { Component } from 'react';
import { Button, Col, Grid, Row, Well } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import './Contact.css';
import cv from '../data/CV-arnaud-baali.json';

export default class Contact extends Component {

  render() {
    return (
      <Grid>
        <hr/>
        <Row className="lastRow">
          <h3>Contact</h3>
          <Col md={4}>
            <Button bsStyle="primary" block>
              <FontAwesome name="linkedin"/> Linkedin
            </Button>
          </Col>
          <Col md={4}>
            <Button bsStyle="default" block>
              <FontAwesome name="github"/> Github
            </Button>
          </Col>
          <Col md={4}>
            <Button bsStyle="info" block>
              <FontAwesome name="twitter"/> Twitter
            </Button>
          </Col>
        </Row>
      </Grid>
    )
  }
}