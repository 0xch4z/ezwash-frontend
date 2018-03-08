import React, { Component } from 'react';
import { Grid, Button } from 'react-bootstrap';

import Pillar from '../components/pillar';
import Layout from '../components/layout';
import pillars from '../config/service-pillars';
import TextContainer from '../components/text-container';

const banner = {
	image: '/static/img/services.JPG',
	alt: 'Services of EZ Wash'
}

class Services extends Component {

	render() {
		console.log(pillars);
		return (
			<Layout title="Services" image={banner}>
				<section>
					<h2>Our Services</h2>
					<Grid>
						{
              pillars.map(({ image, alt, title, text }, index) => (
                <Pillar key={index} image={image} alt={alt} title={title} text={text} />
              ))
            }
					</Grid>
				</section>
				<section>
					<h2>Wash Out</h2>
					<TextContainer>
						First the floor of trailer is swept, brushed, or sprayed to get all debris out.
						Then heavy soap is applied to walls and floor removing all foreign materials an
						fighting set in stains and odors. Then sprayed from front to back of the trailer
						several times for a complete sanitary clean.
					</TextContainer>
				</section>
				<section>
					<h2>Account Services</h2>
					<TextContainer>
						EZ Wash offers its absolute best services to all accounts. To open an account all
						we need is your company information and can be done over the phone. Then the account
						is open and all washes for that company will be invoiced on a monthly basis. Additional
						services are available to trucking companies with an account including free pollen rinses
						during pollen season, free touch up service between washes, free air fresheners, free
						engine rinse, customized washes, leading industry customer service and more. New accounts are
						free to set up. Call today to set your company up.
					</TextContainer>
					<Button href="tel:9199957984">Call now</Button>
				</section>
			</Layout>
		);
	}
}

export default Services;
