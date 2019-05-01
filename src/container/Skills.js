import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import cv from '../data/CV-arnaud-baali.json';
import {Label, ProgressBar} from 'react-bootstrap';

export default class Skills extends Component {

  renderSubSkills(subSkills) {
      return subSkills.map(
          (keyword) =>
            <li><Label bsStyle="info" className="labelTag">{keyword}</Label></li>
      )
  }

  renderGroupOfSkills(skills) {
    return skills.map(
      (skill) =>
      <div>
        <div className="item">
          <h3 className="level-title">{skill.name}</h3>
          <div className="level-bar">
              <ProgressBar now={skill.level} />
          </div>
        </div>
        <div className="tagcloud01">
          <ul>
          {this.renderSubSkills(skill.keywords)}
          </ul>
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