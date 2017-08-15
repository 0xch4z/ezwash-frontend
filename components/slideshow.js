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

  // {
  //   image: '/static/img/IMG_9935.JPG',
  //   alt: 'ezwash wash site',
  //   title: 'Quality Wash Guaranteed',
  //   description: 'We strive to offer a high quality truck wash at a value price, with emphases on the customer.',
  // },

// class Slideshow extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       index: 0,
//       direction: null,
//     };
//     console.log(this.props);
//     this.handleSelect = this.handleSelect.bind(this);
//   };

//   handleSelect(selected, e) {
//     console.log(`e: ${e};\nselected: ${selected}`);
//     console.log(`slides: ${this.props.slides}`);
//     this.setState({
//       index: selected,
//       direction: e.direction
//     });
//   }

//   render() {
//     return(
//       <Carousel activeIndex={this.state.index} direction={this.state.direction} onSelect={this.handleSelect.bind(this)}>
//         {
//           this.props.slides.map((slide, index) => (

//           ))
//         }
//       </Carousel>
//     );
//   }
// }


export default Slideshow;
