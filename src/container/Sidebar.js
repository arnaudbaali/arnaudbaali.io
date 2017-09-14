import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import cv from '../data/CV-arnaud-baali.json';

export default class Sidebar extends Component {


  render() {
    return (
      <div>
        <div classNameName="profile-container">
          <img classNameName="profile" src="https://s3.eu-west-2.amazonaws.com/ab-github-website/arnaud.jpg" width={50} alt="" />
          <h1 classNameName="name">{cv.basics.name}</h1>
          <h3 classNameName="tagline">{cv.basics.label}</h3>
        </div>

        <div classNameName="contact-container container-block">
          <ul classNameName="list-unstyled contact-list">
            <li classNameName="email"><FontAwesome name="envelope"></FontAwesome><a href="mailto: yourname@email.com">alan.doe@website.com</a></li>
            <li classNameName="phone"><FontAwesome name="phone"></FontAwesome><a href="tel:0123 456 789">0123 456 789</a></li>
            <li classNameName="website"><FontAwesome name="globe"></FontAwesome><a href="http://themes.3rdwavemedia.com/website-templates/free-responsive-website-template-for-developers/" target="_blank">portfoliosite.com</a></li>
            <li classNameName="linkedin"><FontAwesome name="linkedin"></FontAwesome><a href="#" target="_blank">linkedin.com/in/alandoe</a></li>
            <li classNameName="github"><FontAwesome name="github"></FontAwesome><a href="#" target="_blank">github.com/username</a></li>
            <li classNameName="twitter"><FontAwesome name="twitter"></FontAwesome><a href="https://twitter.com/3rdwave_themes" target="_blank">@twittername</a></li>
          </ul>
        </div>
        <div className="education-container container-block">
          <h2 className="container-block-title">Education</h2>
          <div className="item">
            <h4 className="degree">MSc in Computer Science</h4>
            <h5 className="meta">University of London</h5>
            <div className="time">2011 - 2012</div>
          </div>
          <div className="item">
            <h4 className="degree">BSc in Applied Mathematics</h4>
            <h5 className="meta">Bristol University</h5>
            <div className="time">2007 - 2011</div>
          </div>
        </div>

        <div className="languages-container container-block">
          <h2 className="container-block-title">Languages</h2>
          <ul className="list-unstyled interests-list">
            <li>English <span className="lang-desc">(Native)</span></li>
            <li>French <span className="lang-desc">(Professional)</span></li>
            <li>Spanish <span className="lang-desc">(Professional)</span></li>
          </ul>
        </div>

        <div className="interests-container container-block">
          <h2 className="container-block-title">Interests</h2>
          <ul className="list-unstyled interests-list">
            <li>Climbing</li>
            <li>Snowboarding</li>
            <li>Cooking</li>
          </ul>
        </div>
      </div>
    )
  }
}