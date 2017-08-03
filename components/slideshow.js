import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';

class Slideshow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      direction: null,
    };
  };

  handleSelect(selected, e) {
    e.preventDefault();
    this.setState({
      index: selected,
      direction: e.direction
    });
  }

  render() {
    return(
      <Carousel activeIndex={this.state.index} direction={this.state.direction} onSelect={this.handleSelect.bind(this)}>
        {
          this.props.slides.map((slide, index) => (
            <Carousel.Item key={index}>
              <img alt={slide.alt} src={slide.image} />
              <Carousel.Caption>
                <h3>{slide.title}</h3>
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
