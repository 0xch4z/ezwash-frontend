import React from 'react';
import { Button } from 'react-bootstrap';

import Phone from 'react-icons/lib/md/local-phone';

const buttonStyle = {
  height: '30px',
  marginLeft: '15px',
  display: 'inline-block',
  background: '#fff',
};

const labelStyle = {
  textDecoration: 'none !important',
  color: '#fff',
};

const newsletterAd = () => (
  <div id="newsletter-ad-wrapper">
    <h4 style={labelStyle}><Phone />
      {" "}
      <span>(919)</span>
      {" "}
      <span>802</span>
      <span>-8647</span>
    </h4>
    <Button 
      type="button"
      href="tel:9198028647"
      style={buttonStyle}
    >
      Call now
    </Button>
  </div>
);

export default newsletterAd;