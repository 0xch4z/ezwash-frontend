import 'isomorphic-fetch';
import React, { Component } from 'react';
import withRedux from 'next-redux-wrapper';

import initStore from '../utils/store';
import Layout from '../components/layout';

class Index extends Component {

	render() {
		const { stars } = this.props;
		return (
			<Layout title="foobar">
				<h1>Test</h1>
			</Layout>
		);
	}
}

export default withRedux(initStore)(Index);
