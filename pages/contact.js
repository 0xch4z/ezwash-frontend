import React, { Component } from 'react';
import { Grid, Col } from 'react-bootstrap';

import Layout from '../components/layout';
import Map from '../components/map';

import ContactForm from '../components/contact-form';

const contactFormStyle = {
	backgroundColor: '#9e0',
};

class Contact extends Component {
	render() {
		return (
			<Layout title="Contact" topComponent={ <Map top height={'22vh'} /> }>
				<section >
					<h2>Get in touch</h2>
					<Grid>
						<Col sm={12} lg={6}>
							<ContactForm />
						</Col>
						<Col sm={12} lg={6}>
							<h1>PLACEHOLDER</h1>
						</Col>
					</Grid>
				</section>
			</Layout>
		);
  }
}

export default Contact;
