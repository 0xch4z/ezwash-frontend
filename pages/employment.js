import React, { Component } from 'react';
import { Grid, Col } from 'react-bootstrap';

import Layout from '../components/layout';
import Map from '../components/map';
import TextContainer from '../components/text-container';
import Pillar from '../components/pillar';
import pillars from '../config/employment-pillars.json';

const banner = {
	image: '/static/img/employment.JPG',
	alt: 'Employees of EZ Wash'
}

class Employment extends Component {

	render() {
		return (
			<Layout title="Employment" image={banner}>
				<section>
					<h2>Why join the EZ Wash team?</h2>
					<Grid>
						{
							pillars.map(({ image, alt, list, title, text }, index) => (
								<Pillar key={index} image={image} alt={alt} title={title} list={list} text={text} />
							))
						}
					</Grid>
				</section>
				<section>
					<h2>Drop in and apply</h2>
					<Grid id="map-container">
            <Map />
          </Grid>
				</section>
			</Layout>
		);
	}
}

export default Employment;
