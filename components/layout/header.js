import React, { Component, PropTypes } from 'react';

import Navigation from './navigation';
import Slideshow from '../slideshow';

class Header extends Component {
  static propTypes() {
    return {
      image: PropTypes.shape({
        image: PropTypes.string,
        alt: PropTypes.string,
      }),
      topComponent: PropTypes.element,
      slides: PropTypes.arrayOf(PropTypes.shape({
        img: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
      })),
    }
  }

  render() {
    const { image, topComponent, slides } = this.props;
    return (
      <header id="header">
        <Navigation />
        { slides ? <Slideshow slides={slides} /> : null }
        { image ? <img id="feature-img" src={image.image} alt={image.alt} /> : null }
        { topComponent ? topComponent : null }
      </header>
    );
  }
}

export default Header;