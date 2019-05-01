import React, { Component } from 'react';
import cv from '../data/CV-arnaud-baali.json';

export default class Languages extends Component {

  renderLanguageItem(languages) {
    return languages.map(
      (language) =>
          <li>{language.language} <span className="lang-desc">({language.level})</span></li>
    )
  }

  render() {
    return (
        <div className="languages-container container-block">
            <h2 className="container-block-title">Languages</h2>
            <ul className="list-unstyled interests-list">
                {this.renderLanguageItem(cv.basics.languages)}
            </ul>
        </div>
    )
  }
}
