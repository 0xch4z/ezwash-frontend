import React from 'react';

import Navigation from './navigation';
import Slideshow from '../slideshow';

const Header = ({ slides }) => (
  <header id="header">
    <Navigation />
    {
      slides ?
      <Slideshow slides={slides} /> : null
    }
  </header>
);

export default Header;