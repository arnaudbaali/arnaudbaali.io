import React, { Component } from 'react';
import { Col, Grid, Row } from 'react-bootstrap';
import cv from '../data/CV-arnaud-baali.json';

export default class Education extends Component {

  renderEductionItem(educations) {
    return educations.map(
      (education) =>
          <div className="item">
              <h4 className="degree">{education.studyType}</h4>
              <h5 className="meta">{education.institution}</h5>
              <div className="time">{education.startDate} - {education.endDate}</div>
          </div>
    )
  }

  render() {
    return (
        <div className="education-container container-block">
            <h2 className="container-block-title">Education</h2>
            {this.renderEductionItem(cv.education)}
        </div>
    )
  }
}
