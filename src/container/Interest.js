import React, { Component } from 'react';
import { Grid, Row, Well } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import cv from '../data/CV-arnaud-baali.json';

export default class Interest extends Component {

  render() {
    return (
      <Grid>
        <hr/>
        <Row>
          <h3>Interests</h3>
          <Well>
            {cv.interests
              .map(t => <span>{t}</span>)
              .reduce((prev, curr) => [prev, ', ', curr])}
          </Well>
        </Row>
      </Grid>
    )
  }
}