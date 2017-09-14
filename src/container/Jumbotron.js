import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

export default class Highlight extends Component {
  render() {
    return (
      <section className="section summary-section">
        <h2 className="section-title"><FontAwesome name="user"/>Career Profile</h2>
        <div className="summary">
          <p>I am an experienced CTO with other 10 years experience in technologies. I used to work on many different industries (Marketplace, Service, Saas, Classifieds, Web Marketing).</p>
          <p>I am also a well Entrepreneur person happy to do Tech for the benefit of Business.</p>
        </div>
      </section>
    )
  }
}
