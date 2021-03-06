import React from 'react';
import { Div, P, Span, A } from 'styled-system-html';

const Footer = props =>
	<Div as="footer" mx="auto" py={5} px={4} maxWidth="1200px" textAlign="center">
		<Div p={3} borderTop="solid 1px gray1">
			<P color="gray">
				Created by John Polacek
				<Span px={3}> | </Span>
				<A color="base" href="https://twitter.com/johnpolacek">@johnpolacek</A>
				<Span px={3}> | </Span>
				<A color="base" href="http://johnpolacek.com">johnpolacek.com</A>
				<Span px={3}> | </Span>
				<A color="base" href="https://github.com/johnpolacek">github/johnpolacek</A>
			</P>
			<P pt={5} fontSize={0} fontStyle="italic" color="gray">Styled System HTML 2.0.6</P>
		</Div>
	</Div>

export default Footer;