import React, { Component, PropTypes } from 'react';
import Head from 'next/head';

import Header from './header';
import Footer from './footer';

class Layout extends Component {

  static propTypes() {
    return {
      title: PropTypes.string,
      children: PropTypes.element.isRequired,
      slides: PropTypes.arrayOf(PropTypes.shape({
        img: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
      })),
      image: PropTypes.shape({
        image: PropTypes.string,
        alt: PropTypes.string,
      }),
      topComponent: PropTypes.element,
    }
  }

  render() {
    const {
      title,
      children,
      slides,
      image,
      topComponent
    } = this.props;
    return (
      <div id="layout-root">
        <Head>
          <title>{ title ? `EZ Wash | ${title}` : "EZ Wash" }</title>
        </Head>
        <Header slides={slides} image={image} topComponent={topComponent} />
        <main id="content">
          { children }
        </main>
        <Footer />
      </div>
    );
  }
}

export default Layout;