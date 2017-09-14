import React, { Component } from 'react';
import { Col, Grid, Row } from 'react-bootstrap';
import cv from '../data/CV-arnaud-baali.json';

export default class Education extends Component {

  renderEductionItem(educations) {
    return educations.map(
      (education) =>
        <Col md={12}>
          <h4>{education.studyType} - {education.institution} ({education.startDate} - {education.endDate})</h4>
          <p>Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum.</p>
        </Col>
    )
  }

  render() {
    return (
      <Grid>
        <Row>
          <h3>Education</h3>
          {this.renderEductionItem(cv.education)}
        </Row>
      </Grid>
    )
  }
}
