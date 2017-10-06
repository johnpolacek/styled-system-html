import React, { Component } from 'react';
import { Box, Footer as FooterEl, Text, Span, A } from '../html';

class Footer extends Component {
	render() {
		return (
			<FooterEl mw="1200px" mx="auto" align='center' py={5} px={4}>
				<Box p={3} borderWidth="1px" borderColor="gray1" borderTop>
					<Text color="gray">
						Created by John Polacek
						<Span px={3}> | </Span>
						<A color="base" href="https://twitter.com/johnpolacek">@johnpolacek</A>
						<Span px={3}> | </Span>
						<A color="base" href="http://johnpolacek.com">johnpolacek.com</A>
						<Span px={3}> | </Span>
						<A color="base" href="https://github.com/johnpolacek">github/johnpolacek</A>
					</Text>
				</Box>
			</FooterEl>
		);
	}
}

export default Footer;