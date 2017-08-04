import React, { Component, PropTypes } from 'react';
import { Row, Col } from 'react-bootstrap';

class Pillar extends Component {
  static propTypes() {
    return {
      image: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }
  }

  render() {
    const { image, alt, title, text} = this.props;
    return (
      <Col style={{margin: "25px 0"}} sm={12} md={4}>
        <div className="pillar-container">
          <div className="pillar-img-container">
            <img src={image} alt={alt} />
          </div>
          <h4>{title}</h4>
          <p>{text}</p>
        </div>
      </Col>
    );
  }
}

export default Pillar;