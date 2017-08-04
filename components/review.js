import React, { Component, PropTypes } from 'react';

class Review extends Component {
  static propTypes() {
    return {
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      review: PropTypes.string.isRequired,
    }
  }

  render() {
    return (
      <div>PLACEHOLDER</div>
    );
  }
}

export default Review;