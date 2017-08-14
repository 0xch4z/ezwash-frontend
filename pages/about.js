import React, { Component } from 'react';
import Layout from '../components/layout';

import { Grid, Col } from 'react-bootstrap';

import Pillar from '../components/pillar';
import pillars from '../config/about-pillars';

const banner = {
	image: '/static/img/about.JPG',
	alt: 'banner',
};

const Subheading = ({ children }) => (
	<h4 style={{textAlign: 'left', color: '#777'}}>
		{children}
	</h4>
);

class About extends Component {

	render() {
		return (
			<Layout title="About" image={banner}>
				<section>
					<h2>About Us</h2>
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
	}
}

export default About;
