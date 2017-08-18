import React, { Component, PropTypes } from 'react';
import { Carousel } from 'react-bootstrap';


class Slideshow extends Component {
  static propTypes() {
    return {
      slides: PropTypes.arrayOf(PropTypes.shape({
        image: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
      })),
    };
  }

  render() {
    const { slides } = this.props;
    return (
      <Carousel interval={3000}>
        {
          slides.map((slide, index) => (
            <Carousel.Item key={index}>
              <img alt={slide.alt} src={slide.image} />
              <Carousel.Caption>
                <h4>{slide.title}</h4>
                <p>{slide.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))
        }
      </Carousel>
    );
  }
}

export default Slideshow;
