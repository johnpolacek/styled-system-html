import styled from 'styled-components'
import { css } from 'styled-components'
import { style, responsiveStyle, space, width, fontSize, color, fontWeight, textAlign, borderColor, borderWidth, boxShadow, hover, focus, active, disabled } from 'styled-system'
import { Flex as _Flex, Box as _Box } from 'grid-styled'

export const height = responsiveStyle({ prop:'height',cssProperty:'height' })
export const maxWidth = responsiveStyle({ prop: 'mw', cssProperty: 'maxWidth' })
export const fontStyle = style({ prop: 'fontStyle', cssProperty: 'fontStyle' })
export const borderStyle = style({ prop: 'borderStyle', cssProperty: 'borderStyle' })
export const overflow = responsiveStyle({ prop: 'overflow', cssProperty: 'overflow' })
export const position = responsiveStyle({ prop: 'position', cssProperty: 'position' })
export const display = responsiveStyle({ prop: 'display', cssProperty: 'display' })

export const wrapperStyles = css` ${space} ${width} ${height} ${fontStyle} ${fontSize} ${textAlign} ${color} ${maxWidth} ${height} ${boxShadow} ${borderColor} ${borderWidth} ${borderStyle} ${overflow} ${position} ${display} `
export const textStyles = css` ${space} ${width} ${fontWeight} ${fontStyle} ${fontSize} ${textAlign} ${color} ${boxShadow} ${borderColor} ${borderWidth} ${position} ${display} `
export const textStylesPseudo = css` ${textStyles} ${hover} ${focus} ${active} ${disabled} `
export const buttonStyles = css`
  display: inline-flex;
  text-decoration: none;
  margin: 0;
  padding: 8px 16px;
  color: white;
  border-radius: 6px;
  cursor: pointer;
  font-size:16px;
  border:none;
  ${textStylesPseudo}
  ${borderStyle}
`