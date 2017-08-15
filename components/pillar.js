import React, { Component, PropTypes } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

class Pillar extends Component {
  static propTypes() {
    return {
      image: PropTypes.string,
      alt: PropTypes.string,
      title: PropTypes.string.isRequired,
      text: PropTypes.string,
      list: PropTypes.arrayOf(PropTypes.string)
    }
  }

  render() {
    const { image, alt, title, text, list } = this.props;
    console.log(this.props);
    return (
      <Col style={{margin: "25px 0"}} sm={12} md={4}>
        <div className="pillar-container">
          { 
            image ?
            <div className="pillar-img-container">
              <img src={image} alt={alt} />
            </div> : null
          }
          <h4>{title}</h4>
          {
            text ?
            <p className="pillar-text">{text}</p> :
            null
          }
          {
            list ?
            list.map(li => <p>&bull; {li}</p>) :
            null
          }
        </div>
      </Col>
    );
  }
}

export default Pillar;