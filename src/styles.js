import styled from 'styled-components'
import { css } from 'styled-components'
import { style, responsiveStyle, space, width, fontSize, color, fontWeight, textAlign, borderColor, borderWidth, borderRadius, boxShadow, hover, focus, active, disabled } from 'styled-system'
import { Flex as _Flex, Box as _Box } from 'grid-styled'

export const height = responsiveStyle({ prop:'height',cssProperty:'height' })
export const h = responsiveStyle({ prop:'h',cssProperty:'height' })
export const maxWidth = responsiveStyle({ prop: 'maxWidth', cssProperty: 'maxWidth' })
export const mw = responsiveStyle({ prop: 'mw', cssProperty: 'maxWidth' })
export const fontStyle = style({ prop: 'fontStyle', cssProperty: 'fontStyle' })
export const borderStyle = style({ prop: 'borderStyle', cssProperty: 'borderStyle' })
export const overflow = responsiveStyle({ prop: 'overflow', cssProperty: 'overflow' })
export const position = responsiveStyle({ prop: 'position', cssProperty: 'position' })
export const display = responsiveStyle({ prop: 'display', cssProperty: 'display' })
export const float = responsiveStyle({ prop: 'float', cssProperty: 'float' })
export const opacity = responsiveStyle({ prop: 'opacity', cssProperty: 'opacity' })
export const top = responsiveStyle({ prop: 'top', cssProperty: 'top' })
export const right = responsiveStyle({ prop: 'right', cssProperty: 'right' })
export const bottom = responsiveStyle({ prop: 'bottom', cssProperty: 'bottom' })
export const left = responsiveStyle({ prop: 'left', cssProperty: 'left' })

export const wrapperStyles = css` ${space} ${width} ${h} ${height} ${mw} ${maxWidth} ${fontStyle} ${fontSize} ${textAlign} ${color} ${boxShadow} ${borderColor} ${borderWidth} ${borderRadius} ${borderStyle} ${overflow} ${position} ${top} ${right} ${bottom} ${left} ${display} ${float} ${opacity} `
export const textStyles = css` ${space} ${width} ${h} ${height} ${mw} ${maxWidth} ${fontWeight} ${fontStyle} ${fontSize} ${textAlign} ${color} ${boxShadow} ${borderColor} ${borderWidth} ${position} ${top} ${right} ${bottom} ${left} ${display} ${float} ${opacity} `
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