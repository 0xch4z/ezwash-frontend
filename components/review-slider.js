import React, { Component, PropTypes } from 'react';
import { Grid, Col, Image, Carousel } from 'react-bootstrap';

class ReviewSlider extends Component {
  static propTypes() {
    return {
      reviews: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        review: PropTypes.string.isRequired,
        medium: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired
      })).isRequired
    }
  }

  render() {
    const { reviews } = this.props;
    return (
      <Carousel interval={6000} controls={false} indicators={false}>
        {
          reviews.map(({ name, avatar, review, medium, url }, index) =>
            <Carousel.Item key={index}>
              <Grid>
                <Col sm={12} md={3}>
                  <Image className="review-avatar" src={avatar} alt={`${name}`} circle thumbnail responsive />
                  <h4>{name}</h4>
                </Col>
                <Col className="review-container" sm={12} md={9}>
                  <h3 className="review-body">"{review}"</h3>
                  <strong>via <a target="_blank" href={url}>{medium}</a></strong>
                </Col>
              </Grid>
            </Carousel.Item>
          )
        }
      </Carousel>
    );
  }
}

export default ReviewSlider;


//   render() {
//     const { image, alt, title, text} = this.props;
//     return (
//       <Col style={{margin: "25px 0"}} sm={12} md={4}>
//         <div className="pillar-container">
//           <div className="pillar-img-container">
//             <img src={image} alt={alt} />
//           </div>
//           <h4>{title}</h4>
//           <p>{text}</p>
//         </div>
//       </Col>
//     );
//   }
// }
