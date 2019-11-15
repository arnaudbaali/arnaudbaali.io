import React from 'react';
import {Image} from 'react-bootstrap';

export default ({cv}) =>
    <div className="profile-container">
        <Image className="profile" src="https://s3.eu-west-2.amazonaws.com/ab-github-website/arnaud.jpg" width={100} thumbnail />
        <h1 className="name">{cv.basics.name}</h1>
        <h3 className="tagline">{cv.basics.label}</h3>
    </div>;