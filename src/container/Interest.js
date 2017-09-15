import React, { Component } from 'react';
import cv from '../data/CV-arnaud-baali.json';

export default class Interest extends Component {

  render() {
    return (
        <div className="interests-container container-block">
            <h2 className="container-block-title">Interests</h2>
            <ul className="list-unstyled interests-list">
                {cv.interests
                    .map(t => <li>{t}</li>)}
            </ul>
        </div>
    )
  }
}