import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="text-center">
          <small className="copyright">Designed with <FontAwesome name="heart"/> by <a href="http://themes.3rdwavemedia.com" target="_blank">Xiaoying Riley</a> for Arnaud Baali</small>
        </div>
      </footer>
    )
  }
}