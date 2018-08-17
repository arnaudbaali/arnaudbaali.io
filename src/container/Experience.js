import React, { Component } from 'react';
import { Col, Grid, Label, Panel, Row, Well } from 'react-bootstrap';
import cv from '../data/CV-arnaud-baali.json';
import FontAwesome from 'react-fontawesome';
import ExperienceHighlight from "./ExperienceHighlight";

export default class Experience extends Component {

  renderExperienceTags(tags) {
    return tags.map(
      (tag, i) =>
          <Label bsStyle="default" className="labelTag">{tag}</Label>
    )
  }

  renderExperienceHighlightItem(highlights) {
    return highlights.map(
      (highlight) =>
        <ExperienceHighlight
          text={highlight}
        />
    )
  }

  renderItem() {

    return cv.work.map(
      (exp, i) =>
        <div className="item">
          <div className="meta">
            <div className="upper-row">
              <h3 className="job-title">{exp.position}</h3>
              <div className="time">{exp.startDate}  {exp.endDate === undefined ? '- Present' : '-' + exp.endDate }</div>
            </div>
            <div className="company">{exp.company}, {exp.city}</div>
          </div>
          <div className="details">
            <p>{this.renderExperienceHighlightItem(exp.highlights)}</p>
          </div>
        </div>
    );
  }

  render() {
    return (
      <section className="section experiences-section">
        <h2 className="section-title"><FontAwesome name="briefcase" />Experiences</h2>
        {this.renderItem(cv.work)}
      </section>
    )
  }
}
