import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import Highlight from './Jumbotron';
import Experience from './Experience';
import Skills from './Skills';

export default class Main extends Component {
  render() {
    return (
      <div className="main-wrapper">

        <Highlight/>
        <Experience/>

        <section className="section projects-section">
          <h2 className="section-title"><FontAwesome name="archive"/>Projects</h2>
          <div className="intro">
            <p>You can list your side projects or open source libraries in this section. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et ligula in nunc bibendum fringilla a eu lectus.</p>
          </div>
          <div className="item">
            <span className="project-title"><a href="#">Velocity</a></span> - <span className="project-tagline">A responsive website template designed to help startups promote, market and sell their products.</span>
          </div>
        </section>
        <Skills/>
      </div>
    )
  }
}