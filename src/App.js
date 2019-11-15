import React, { Component } from 'react';
import './App.css';
import {Helmet} from 'react-helmet';
import cv from './data/CV-arnaud-baali.json';
import FontAwesome from 'react-fontawesome';
import Profile from './container/Profile';
import Contact from './container/Contact';
import Education from './container/Education';
import Languages from './container/Languages';
import Interest from './container/Interest';
import Highlight from './container/Jumbotron';
import Experience from './container/Experience';
import Skills from './container/Skills';
import Footer from './container/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Arnaud Baali - CTO in London</title>
          <link rel="canonical" href="https://arnaudbaali.github.io/cv" />
          <meta name="description" content={cv.basics.summary} />
        </Helmet>
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
            <Skills/>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
