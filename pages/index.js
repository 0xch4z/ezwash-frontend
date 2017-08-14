import React, { Component } from 'react';
import { Grid, Col } from 'react-bootstrap';

import Map from '../components/map';
import Layout from '../components/layout';
import Pillar from '../components/pillar';
import ReviewSlider from '../components/review-slider';
import NewsletterAd from '../components/newsletter-ad';

import slides from '../config/slides';
import pillars from '../config/home-pillars';
import reviews from '../config/reviews';


class Index extends Component {

  render() {
    return (
      <Layout slides={slides} >
        <NewsletterAd />
        <section>
          <h2>Why choose us?</h2>
          <Grid>
            {
              pillars.map(({ image, alt, title, text }, index) => (
                <Pillar key={index} image={image} alt={alt} title={title} text={text} />
              ))
            }
          </Grid>
        </section>
        <section id="review">
          <ReviewSlider reviews={reviews} />
        </section>
        <section>
          <h2>We hope to see you soon!</h2>
          <Grid id="map-container">
            <Map />
          </Grid>
        </section>

      </Layout>
    );
  }
}

export default Index;
