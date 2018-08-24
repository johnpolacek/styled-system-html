import React from 'react'
import {Button as Btn} from 'styled-system-html'

const Button = props =>
	<Btn
	    fontSize={1}
	    m={0}
	    px={3}
	    py={2}
	    color='white'
	    bg='blue'
	    {...props}
	    css={{
	    	cursor:'pointer',
			fontFamily: 'inherit',
			display: 'inline-block',
			verticalAlign: 'middle',
			textAlign: 'center',
			border: 0,
			borderRadius: '6px',
			textDecoration: 'none',
			appearance: 'none',
			'&:disabled': {
				opacity: 1/4
			}
	    }}
	/>

export default Button