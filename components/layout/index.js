import React, { Component, PropTypes } from 'react';
import Head from 'next/head';

import Header from './header';
import Footer from './footer';

class Layout extends Component {

  static propTypes() {
    return {
      title: PropTypes.string,
      children: PropTypes.element.isRequired,
      slides: PropTypes.shape({
        img: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
      })
    }
  }

  render() {
    const { title, children, slides } = this.props;
    return (
      <div id="layout-root">
        <Head>
          <title>{ title ? title : "EZWash" }</title>
        </Head>
        <Header slides={slides} />
        <main id="content">
          { children }
        </main>
        <Footer />
      </div>
    );
  }
}

export default Layout;