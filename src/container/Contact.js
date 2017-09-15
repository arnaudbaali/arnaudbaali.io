import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import { ModalCv } from '../component/modalCv';

export default ({cv}) =>
    <div className="contact-container container-block">
      <ul className="list-unstyled contact-list">
        <li className="linkedin"><FontAwesome name="linkedin" /><a href={cv.basics.profiles.linkedin.url} target="_blank">{cv.basics.profiles.linkedin.display}</a></li>
        <li className="github"><FontAwesome name="github" /><a href={cv.basics.profiles.github} target="_blank">{cv.basics.profiles.github}</a></li>
        <li className="twitter"><FontAwesome name="twitter" /><a href={cv.basics.profiles.twitter} target="_blank">{cv.basics.profiles.twitterUsername}</a></li>
        <ModalCv/>
      </ul>
    </div>;
