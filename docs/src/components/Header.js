import React from 'react'
import { Div, H1, P, Ul, Li, A, Img } from 'styled-system-html'
import Button from './Button'

const Header = props =>
	<Div is='header'>
		<Div mx="auto" css={{maxWidth:'960px'}} pt={4} pb={2}>
			<Div width={1} textAlign="center">
				<H1 fontSize={6} pb={1}>&lt;/&gt; Styled System HTML Elements</H1>
				<P>HTML elements extended as components, ready for theming via styled system.</P>
				<P mt={-2} pb={4}>Built with/for <A color="blue" fontWeight="bold" href="http://styled-components.com">Styled Components</A> &amp; <A color="blue" fontWeight="bold" href="http://jxnblk.com/styled-system/">Styled System</A></P>
				<Button fontSize={2} is="a" href="https://github.com/johnpolacek/styled-system-html/" bg='blue8'>View on Github</Button>
			</Div>
		</Div>
	</Div>

export default Header