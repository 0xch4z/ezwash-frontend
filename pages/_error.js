import React, { Component, PropTypes } from 'react';
import Link from 'next/link';
import Head from 'next/head';

import Layout from '../components/layout';

class Error extends Component {
  static propTypes() {
    return {
      errorCode: PropTypes.number.isRequired,
      url: React.PropTypes.string.isRequired,
    }
  }

  static getInitialProps({ res, xhr }) {
    const errorCode = res ? res.statusCode : xhr.status
    return { errorCode }
  }

  render() {
    const { errorCode } = this.props;
    let errorTitle, errorMessage;
    switch (errorCode) {
      case 200:
      case 404:
        errorTitle = "Page Not Found";
        errorMessage = "The page you requested does not exist!";
        break;
      case 500:
        errorTitle = "Internal Server Error";
        errorMessage = "Oops... An internal server error has occured!";
        break;
      default: 
        errorTitle = `Error ${ errorCode }`;
        errorMessage = `An HTTP Error ${ errorCode } has occured!`;
    }
    return (
      <Layout title={errorTitle}>
        <h1>{errorTitle}</h1>
        <p>{errorMessage}</p>
      </Layout>
    );
  }
}

export default Error;