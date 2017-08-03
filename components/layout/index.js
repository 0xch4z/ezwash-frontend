import React, { Component, PropTypes } from 'react';
import Head from 'next/head';

import Header from './header';
import Footer from './footer';
import Navigation from './navigation';

class Layout extends Component {

  static propTypes() {
    return {
      title: PropTypes.string,
      children: PropTypes.element.isRequired
    }
  }

  render() {
    const { title, children } = this.props;
    return (
      <div>
        <Head>
          <title>{ title ? title : "EZWash" }</title>
        </Head>
        <Header />
        { children }
        <Footer />
      </div>
    );
  }
}

export default Layout;