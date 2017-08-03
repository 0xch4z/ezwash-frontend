import React, { Component, PropTypes } from 'react';
import Head from 'next/head';

class Layout extends Component {
  static title() { return "foo" }

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
        <header>
          This is the header
        </header>
        { children }
        <footer>
          This is the footer
        </footer>
      </div>
    );
  }
}

export default Layout;