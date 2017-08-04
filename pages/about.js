import React, { Component } from 'react';
import Layout from '../components/layout';

const bannerImage = {
	image: '/static/img/logo.svg',
	alt: 'banner',
};

class About extends Component {

	render() {
		return (
			<Layout title="About" image={bannerImage}>
				<h1>About</h1>
			</Layout>
		);
	}
}

export default About;
