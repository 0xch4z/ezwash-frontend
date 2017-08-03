import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
	render() {
		return (
			<html lang="en">
				<Head>
					<link rel="apple-touch-icon" sizes="180x180" href="/static/apple-touch-icon.png" />
					<link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png" />
					<link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-16x16.png" />
					<link rel="manifest" href="/static/manifest.json" />
					<link rel="mask-icon" href="/static/safari-pinned-tab.svg" color="#e87d00" />
					<link rel="canonical" href="https://ezwashtruckwash.herokuapp.com/" />
					<meta name="theme-color" content="#ffffff" />
					<meta charSet="utf-8" />
					<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no,minimal-ui" />
					<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
					<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />
					<meta name="google-site-verification" content="cHxjZ9OzSfZqZB4C_B4_Xh5QRjEOIgwzSBkTAN6k2jo" />
					<meta name="author" content="Charles Kenney" />
					<meta property="og:type" content="website" />
					<meta property="og:title" content="EZ Wash Truck Wash" />
					<meta property="og:image" content="https://ezwashtruckwash.herokuapp.com/static/img/ezwash-banner.png" />
					<meta property="og:image:secure_url" content="https://ezwashtruckwash.herokuapp.com/" />
					<meta property="og:description" content="EZ Wash, a premier commercial truck wash center, specializes in cleaning and detailing commercial transportation trucks." />
					<meta property="og:url" content="https://ezwashtruckwash.herokuapp.com/" />
					<meta property="og:site_name" content="EZ WASH Truck Wash" />
					<meta name="twitter:site" content="@ezwashtruckwash" />
					<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" />
					<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-theme.min.css" />
					<link rel="stylesheet" href="/static/styles.css" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</html>
		);
	}
}
