import styled from 'styled-components'
import { responsiveStyle } from 'styled-system'
import { wrapperStyles } from './styles'

export const flex = responsiveStyle('flex')
export const order = responsiveStyle('order')
export const wrap = responsiveStyle('flex-wrap', 'wrap', 'wrap')
export const direction = responsiveStyle('flex-direction', 'direction')
export const align = props => responsiveStyle('align-items', 'align')
export const justify = props => responsiveStyle('justify-content', 'justify')
export const column = props => props.column ? `flex-direction:column;` : null

const Flex = styled.div` 
	display:flex;
	${wrapperStyles} 
	${flex}
	${order}
	${flex}
	${order}
	${wrap}
	${direction}
	${align}
	${justify}
	${column}
`
export default Flex