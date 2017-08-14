import React, { Component } from 'react';
import Layout from '../components/layout';

const banner = {
	image: '/static/img/employment.JPG',
	alt: 'Employees of EZ Wash'
}

class Employment extends Component {

	render() {
		return (
			<Layout title="Employment" image={banner}>
				<h1>Employment</h1>
			</Layout>
		);
	}
}

export default Employment;
