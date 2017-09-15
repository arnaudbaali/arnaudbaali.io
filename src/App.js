import React, { Component } from 'react';
import './App.css';
import cv from './data/CV-arnaud-baali.json';
import FontAwesome from 'react-fontawesome';
import Profile from './container/Profile';
import Contact from './container/Contact';
import Education from "./container/Education";
import Languages from "./container/Languages";
import Interest from "./container/Interest";
import Highlight from "./container/Jumbotron";
import Experience from "./container/Experience";
import Skills from "./container/Skills";
import Footer from "./container/Footer";

class App extends Component {
  render() {
    return (
      <div>
      <div className="wrapper">
        <div className="sidebar-wrapper">
          <Profile cv={cv} />

          <Contact cv={cv} />

          <Education/>

          <Languages/>

          <Interest/>

        </div>

        <div className="main-wrapper">

          <Highlight/>

          <Experience/>

          <section className="section projects-section">
            <h2 className="section-title"><FontAwesome name="archive"/>Projects</h2>
            <div className="intro">
              <p>You can list your side projects or open source libraries in this section. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et ligula in nunc bibendum fringilla a eu lectus.</p>
            </div>
            <div className="item">
              <span className="project-title"><a href="#hook">Velocity</a></span> - <span className="project-tagline">A responsive website template designed to help startups promote, market and sell their products.</span>

            </div>
          
            
          </section>

          <Skills/>

        </div>
      </div>

        <Footer/>
      </div>
    );
  }
}

export default App;
