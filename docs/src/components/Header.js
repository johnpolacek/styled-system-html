import React from 'react'
import { Div, H1, P, A } from 'styled-system-html'

const Header = props =>
	<Div is='header'>
		<Div mx="auto" bg="blue0" py={4}>
			<Div width={1} textAlign="center">
				<H1 fontSize={5} fontWeight="normal" fontFamily='"Lucida Console", Monaco, monospace'><Div display="inline-block" borderRadius="8px" border="1px solid" p={2} fontSize={4} position="relative" top="-2px">&lt;/&gt;</Div> Styled System HTML</H1>
				<A fontSize={3} fontWeight="bold " href="https://github.com/johnpolacek/styled-system-html/" color='blue'>View on Github</A>
				<P pt={4}>HTML elements extended as components, ready for theming via styled system.</P>
				<P mt={-2}>Built with/for <A color="blue" fontWeight="bold" href="http://styled-components.com">Styled Components</A> &amp; <A color="blue" fontWeight="bold" href="http://jxnblk.com/styled-system/">Styled System</A></P>
			</Div>
		</Div>
	</Div>

export default Header