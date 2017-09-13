import React, { Component } from 'react';
import { Col, Grid, Label, Panel, Row, Well } from 'react-bootstrap';
import experiences from '../data/experience.json';
import './Experience.css';
import FontAwesome from 'react-fontawesome';

export default class Experience extends Component {

  renderExperienceTags(tags) {
    return tags.map(
      (tag, i) =>
          <Label bsStyle="default" className="labelTag">{tag}</Label>
    )
  }

  renderItem() {

    return experiences.map(
      (exp, i) =>
        <Row key={i}>
          <Well>
            <Row>
              <Col xs={2} md={2}>
                <img src="http://bootsnipp.com/apple-touch-icon-114x114-precomposed.png" alt="bootsnipp"
                     className="img-rounded img-responsive" />
              </Col>
              <Col xs={10} md={10} className="section-box">
                <h2>
                  {exp.company} <a href={exp.url} target="_blank"><span className="glyphicon glyphicon-new-window"></span></a>
                </h2>
                <h3>Position: {exp.position} - From: {exp.startDate} {exp.endDate !== null && 'to:' + exp.endDate }</h3>
                <p>
                    {exp.resume}
                </p>
                <hr />
                <Row className="rating-desc">
                  <Col md={12}>
                    <FontAwesome name="server"/>
                    {this.renderExperienceTags(exp.tags)}
                  </Col>
                </Row>
              </Col>
            </Row>
          </Well>
        </Row>
    );
  }

  render() {
    return (
      <Grid>
        <h3>Experience</h3>
        {this.renderItem()}
        <hr />
      </Grid>
    )
  }
}