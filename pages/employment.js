import React, { Component } from 'react';
import Layout from '../components/layout';

class Employment extends Component {

	render() {
		const { stars } = this.props;
		return (
			<Layout title="EZ Wash | Employment">
				<h1>Employment</h1>
			</Layout>
		);
	}
}

export default Employment;
