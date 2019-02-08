import React from 'react'
import tags from 'html-tags'
import styled from 'styled-components'
import {
  space,
  color,
  width,
  height,
  flex,
  order,
  alignSelf,
  flexWrap,
  flexDirection,
  alignItems,
  justifyContent,
  fontSize,
  fontFamily,
  fontWeight,
  textAlign,
  lineHeight,
  letterSpacing,
  borders,
  borderColor,
  borderRadius,
  buttonStyle,
  boxShadow,
  backgroundImage,
  backgroundSize,
  backgroundPosition,
  backgroundRepeat,
  opacity,
  variant,
} from 'styled-system'

const themed = key => props => props.theme[key]

export const El = styled('div')({
  boxSizing: 'border-box'
},
  space,
  width,
  fontSize,
  color,
  flex,
  order,
  alignSelf,
  themed('El')
)

El.propTypes = {
  ...space.propTypes,
  ...width.propTypes,
  ...fontSize.propTypes,
  ...color.propTypes,
  ...flex.propTypes,
  ...order.propTypes,
  ...alignSelf.propTypes,
}

tags.forEach(tag => {
    module.exports[tag.charAt(0).toUpperCase() + tag.slice(1)] = props => <El as={tag} {...props} />
})

module.exports['Text'] = props => <El as="p" m={0} {...props} />
module.exports['Image'] = props => <El as="img" {...props} />
module.exports['UL'] = props => <El as="ul" {...props} />
module.exports['OL'] = props => <El as="ol" {...props} />
module.exports['LI'] = props => <El as="li" {...props} />
module.exports['DL'] = props => <El as="dl" {...props} />
module.exports['DT'] = props => <El as="dt" {...props} />
module.exports['THead'] = props => <El as="thead" {...props} />
module.exports['TBody'] = props => <El as="tbody" {...props} />
module.exports['TH'] = props => <El as="th" {...props} />
module.exports['TR'] = props => <El as="tr" {...props} />
module.exports['TD'] = props => <El as="td" {...props} />
module.exports['TextArea'] = props => <El as="textarea" {...props} />
module.exports['FigCaption'] = props => <El as="figcaption" {...props} />