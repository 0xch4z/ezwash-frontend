import React from 'react';
import { Grid } from 'react-bootstrap';

import Layout from '../components/layout';
import Pillar from '../components/pillar';
import NewsletterAd from '../components/newsletter-ad';

const slides = [
  {
    image: '/static/img/IMG_9841.JPG',
    alt: 'ezwash wash site',
    title: 'Quality Wash Guaranteed',
    description: 'We strive to offer a high quality truck wash at a value price, with emphases on the customer.',
  },
  {
    image: '/static/img/IMG_9855.JPG',
    alt: 'ezwash wash site',
    title: 'Quality Wash Guaranteed',
    description: 'We strive to offer a high quality truck wash at a value price, with emphases on the customer.',
  },
  {
    image: '/static/img/IMG_9935.JPG',
    alt: 'ezwash wash site',
    title: 'Quality Wash Guaranteed',
    description: 'We strive to offer a high quality truck wash at a value price, with emphases on the customer.',
  },
];

const pillars = [
  {
    image: '/static/img/IMG_9935.JPG',
    alt: 'HandScrubbingTruck',
    title: 'Quality Service',
    text: 'At EZ Wash, we understand the trucking business. We offer quality service with quick turn arounds ieFIEHWOIOF EW IHIihioh wejfieif efhweihfiwe e fehife fkwfwihe woefwebouf wfhweiohfiew fwehehfe fehifhef eifhief '
  },
  {
    image: '/static/img/IMG_9935.JPG',
    alt: 'Money',
    title: 'Competitive Pricing',
    text: 'We price very competitively and ieoiqfej ekwjfowe fewjofjwepofw ewjfojqp fekjqoje ejcojpepfqw fejfojepan ewjfoe jpoqjf efjqopfeopf jeqjpofe feqjf poepqfq eoqh poejfq eeqo jefqjopeq feqojfope qjpoe fpoeqjpejqof'
  },
  {
    image: '/static/img/IMG_9935.JPG',
    alt: 'LocationPin',
    title: 'Convenient Location',
    text: 'We price very competitively and ieoiqfej ekwjfowe fewjofjwepofw ewjfojqp fekjqoje ejcojpepfqw fejfojepan ewjfoe jpoqjf efjqopfeopf jeqjpofe feqjf poepqfq eoqh poejfq eeqo jefqjopeq feqojfope qjpoe fpoeqjpejqof'
  },
];

const Index = () => (
  <Layout slides={slides} >
    <NewsletterAd />
    <section>
      <h3>Why choose us?</h3>
      <Grid>
        {
          pillars.map(({ image, alt, title, text }, index) => (
            <Pillar key={index} image={image} alt={alt} title={title} text={text} />
          ))
        }
      </Grid>
    </section>
  </Layout>
);

export default Index;
