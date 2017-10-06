import React, { Component } from 'react';
import { Flex, Box, Header as HeaderEl, H1, LinkButton, P, UL, LI, A } from '../html';

class Header extends Component {
	render() {
		return (
			<HeaderEl bg={'blue'} color="white">
				<Flex mw="1200px" mx="auto" align='center' py={5} px={4} wrap>
					<Box w={2/3}>
						<H1 f={6} m={0}>Styled System HTML Elements</H1>
					</Box>
					<Box w={1/3} align="right">
						<LinkButton href="https://github.com/johnpolacek/styled-system-html/" bg={'blue8'}>View on Github</LinkButton>
					</Box>
					<Box w={1}>
						<P>HTML elements extended as styled components via styled system, ready for theming. Built with/for:</P>
			      		<UL>
			      			<LI><A color="white" fontWeight="bold" href="http://styled-components.com">Styled Components</A></LI>
			      			<LI><A color="white" fontWeight="bold" href="http://jxnblk.com/styled-system/">Styled System</A> by <A color="white" fontWeight="bold" href="http://jxnblk.com">Brent Jackson</A></LI>
			      			<LI><A color="white" fontWeight="bold" href="http://jxnblk.com/grid-styled/">Grid Styled</A> by <A color="white" fontWeight="bold" href="http://jxnblk.com">Brent Jackson</A></LI>
			      		</UL>
					</Box>
				</Flex>		
			</HeaderEl>
		);
	}
}

export default Header;