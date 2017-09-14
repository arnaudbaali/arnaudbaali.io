import React, { Component } from 'react';
import { Alert, Button, Col, Grid, Panel, ProgressBar, Row } from 'react-bootstrap';
import './Skills.css';
import FontAwesome from 'react-fontawesome';
import cv from '../data/CV-arnaud-baali.json';

export default class Skills extends Component {

  renderGroupOfSkills(skills) {
    return skills.map(
      (skill) =>
        <div className="item">
          <h3 className="level-title">{skill.name}</h3>
          <div className="level-bar">
            <div className="level-bar-inner" data-level="98%">
            </div>
          </div>
        </div>
    )
  }

  render() {
    return (
      <section className="skills-section section">
        <h2 className="section-title"><FontAwesome name="rocket"/>Skills &amp; Proficiency</h2>
        <div className="skillset">
          {this.renderGroupOfSkills(cv.skills)}

        </div>
      </section>
    )
  }
}