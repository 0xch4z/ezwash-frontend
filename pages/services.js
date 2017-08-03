import React, { Component } from 'react';
import Layout from '../components/layout';

class Services extends Component {

	render() {
		const { stars } = this.props;
		return (
			<Layout title="EZ Wash | Services">
				<h1>Services</h1>
			</Layout>
		);
	}
}

export default Services;
