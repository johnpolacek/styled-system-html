import styled from 'styled-components'
import { fontSize, color, textAlign, borderColor, borderWidth, boxShadow } from 'styled-system'
import { height, maxWidth, overflow } from './styles'
import { Box as _Box } from 'grid-styled'


const Box = styled(_Box)([], fontSize, color, textAlign, borderColor, borderWidth, boxShadow, height, maxWidth, overflow)
export default Box
