import React, { Component } from 'react';
import { Grid, Col } from 'react-bootstrap';

import Layout from '../components/layout';
import Map from '../components/map';
import Phone from 'react-icons/lib/md/phone';
import Location from 'react-icons/lib/md/room';
import Email from 'react-icons/lib/md/mail';


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
							<h3><Location /> 4465 Buffalo Rd, Selma, NC 27576</h3>
							<h3><Email /> erik@ezwashtruckwash.com</h3>
							<h3><Phone /> (919) 995-7984</h3>
						</Col>
					</Grid>
				</section>
			</Layout>
		);
  }
}

export default Contact;
