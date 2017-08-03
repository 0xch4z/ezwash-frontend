import React from 'react';

import Navigation from './navigation';
import Slideshow from '../slideshow';

const Header = (props) => (
  <header id="header">
    <Navigation />
    {
      props.slides ?
      <Slideshow slides={props.slides} /> : null
    }
  </header>
);

export default Header;