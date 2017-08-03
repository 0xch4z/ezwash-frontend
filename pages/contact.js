import React, { Component } from 'react';
import Layout from '../components/layout';

class Contact extends Component {

	render() {
		const { stars } = this.props;
		return (
			<Layout title="EZ Wash | Contact">
				<h1>Contact</h1>
			</Layout>
		);
  }
  
}

export default Contact;
