import React, { Component } from 'react';
import Layout from '../components/layout';

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

class Index extends Component {

	render() {
		return (
			<Layout slides={slides} >
				<h1>Home</h1>
			</Layout>
		);
	}
}

export default Index;
