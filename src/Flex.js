import styled from 'styled-components'
import { fontSize, color, borderColor, borderWidth, boxShadow } from 'styled-system'
import { height, maxWidth, overflow } from './styles'
import { Flex as _Flex } from 'grid-styled'

const Flex = styled(_Flex)([], height, maxWidth, overflow, fontSize, color, maxWidth, boxShadow, borderColor, borderWidth)
export default Flex
