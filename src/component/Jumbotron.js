import React, { Component } from 'react';
import { Button, Jumbotron } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

export default class Highlight extends Component {
  render() {
    return (
      <Jumbotron>
        <h2>Hello, world!</h2>
        <p>I am an experienced CTO with other 10 years experience in technologies. I used to work on many different industries (Marketplace, Service, Saas, Classifieds, Web Marketing).</p>
        <p>I am also a well Entrepreneur person happy to do Tech for the benefit of Business.</p>
        <p><Button bsStyle="primary">
           <FontAwesome name="rocket" /> Learn more
        </Button></p>
      </Jumbotron>
    )
  }
}
