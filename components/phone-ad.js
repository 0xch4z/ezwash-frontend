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
  <div id="phone-ad-wrapper">
    <h4 style={labelStyle}><Phone />
      {" "}
      <span>(919)</span>
      {" "}
      <span>995</span>
      <span>-7984</span>
    </h4>
    <Button 
      type="button"
      href="tel:9199957984"
      style={buttonStyle}
    >
      Call now
    </Button>
  </div>
);

export default newsletterAd;