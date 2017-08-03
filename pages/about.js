import React, { Component } from 'react';
import Layout from '../components/layout';

class About extends Component {

	render() {
		const { stars } = this.props;
		return (
			<Layout title="EZ Wash | About">
				<h1>About</h1>
			</Layout>
		);
	}
}

export default About;
