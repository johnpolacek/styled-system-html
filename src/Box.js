import styled from 'styled-components'
import { responsiveStyle } from 'styled-system'
import { wrapperStyles } from './styles'

export const flex = responsiveStyle('flex')
export const order = responsiveStyle('order')

const Box = styled.div` 
	${wrapperStyles} 
	${flex}
	${order}
`
export default Box