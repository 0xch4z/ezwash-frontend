import React, { Component } from 'react';
import Layout from '../components/layout';

const banner = {
	image: '/static/img/services.JPG',
	alt: 'Services of EZ Wash'
}

class Services extends Component {

	render() {
		return (
			<Layout title="Services" image={banner}>
				<h1>Services</h1>
			</Layout>
		);
	}
}

export default Services;
