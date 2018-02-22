import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

export default class Root extends Document {
	render() {
		return (
			<html lang="en">
				<Head>
					{ /* MAIN SEO */ }
					<meta name="description" content="EZ Wash Truck Wash, a premier commercial truck wash company in Selma, NC. EZ Wash specializes in cleaning and detailing commercial transportation trucks." />
					<meta name="keywords" content="EZ Wash, Truck Wash" />
					<meta name="author" content="Charles Kenney, Erik Walser" />
					{ /* OG META */ }
					<meta property="og:title" content="EZ Wash Truck Wash" />
					<meta property="og:description" content="EZ Wash Truck Wash, a premier commercial truck wash company in Selma, NC. EZ Wash specializes in cleaning and detailing commercial transportation trucks." />
					<meta property="og:type" content="website" />
					<meta property="og:url" content="https://www.ezwashtruckwash.com/" />
					<meta property="og:site_name" content="EZ Wash Truck Wash" />
					{ /* TWITTER META */ }
					<meta name="twitter:card" content="summary" />
					<meta name="twitter:site" content="@ez_wash" />
					<meta name="twitter:title" content="EZ Wash Truck Wash" />
					<meta name="twitter:description" content="EZ Wash Truck Wash, a premier commercial truck wash company in Selma, NC. EZ Wash specializes in cleaning and detailing commercial transportation trucks." />
					{ /* GOOGLE PLUS META */ }
					<meta itemprop="name" content="EZ Wash Truck Wash" />
					<meta itemprop="description" content="EZ Wash Truck Wash, a premier commercial truck wash company in Selma, NC. EZ Wash specializes in cleaning and detailing commercial transportation trucks." />
					<meta itemprop="image" content="https://www.ezwashtruckwash.com/static/img/andriod-chrome-512x512.png" />
					{ /* GENERAL META */ }
					<meta name="google-site-verification" content="cHxjZ9OzSfZqZB4C_B4_Xh5QRjEOIgwzSBkTAN6k2jo" />
					<meta charSet="utf-8" />
					<meta name="viewport" content="width=device-width,initial-scale=1" />
					<meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
					<meta httpEquiv="Content-Type" content="text/html; charset=ISO-8859-1" />
					{ /* ASSETS */ }
					<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous" />
					<link rel="stylesheet" href="/static/styles.css" />
					{ /* FAVICO */ }
					<link rel="apple-touch-icon" sizes="180x180" href="/static/apple-touch-icon.png" />
					<link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png" />
					<link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-16x16.png" />
					<link rel="manifest" href="/static/manifest.json" />
					<link rel="mask-icon" href="/static/safari-pinned-tab.svg" color="#e87d00" />
					<link rel="canonical" href="https://www.ezwashtruckwash.com/" />
					<meta name="theme-color" content="#ffffff" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</html>
		);
	}
}
