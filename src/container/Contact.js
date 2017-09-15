import React from 'react';
import FontAwesome from 'react-fontawesome';

export default ({cv}) =>
    <div className="contact-container container-block">
      <ul className="list-unstyled contact-list">
        <li className="email"><FontAwesome name="envelope" /><a href="#">{cv.basics.email}</a></li>
        <li className="phone"><FontAwesome name="phone" /><a href="tel:0123 456 789">{cv.basics.phone}</a></li>
        <li className="linkedin"><FontAwesome name="linkedin" /><a href={cv.basics.profiles.linkedin.url} target="_blank">{cv.basics.profiles.linkedin.display}</a></li>
        <li className="github"><FontAwesome name="github" /><a href={cv.basics.profiles.github} target="_blank">{cv.basics.profiles.github}</a></li>
        <li className="twitter"><FontAwesome name="twitter" /><a href={cv.basics.profiles.twitter} target="_blank">{cv.basics.profiles.twitterUsername}</a></li>
      </ul>
    </div>;
