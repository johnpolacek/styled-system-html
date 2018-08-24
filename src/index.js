import React from 'react'
import tags from 'html-tags'
import system from 'system-components'

const El = system(
	'space',
	'width',
	'fontSize',
	'textColor',
	'bgColor',
	'color',
	// typography
	'fontFamily',
	'textAlign',
	'lineHeight',
	'fontWeight',
	'letterSpacing',
	// layout
	'display',
	'maxWidth',
	'minWidth',
	'height',
	'maxHeight',
	'minHeight',
	'size',
	'ratio',
	'verticalAlign',
	// flexbox
	'alignItems',
	'alignContent',
	'justifyContent',
	'flexWrap',
	'flexDirection',
	'flex',
	'flexBasis',
	'justifySelf',
	'alignSelf',
	'order',
	// grid
	'gridGap',
	'gridColumnGap',
	'gridRowGap',
	'gridColumn',
	'gridRow',
	'gridAutoFlow',
	'gridAutoColumns',
	'gridAutoRows',
	'gridTemplateColumns',
	'gridTemplateRows',
	// borders
	'border',
	'borderTop',
	'borderRight',
	'borderBottom',
	'borderLeft',
	'borders',
	'borderColor',
	'borderRadius',
	// misc
	'boxShadow',
	'opacity',
	'background',
	'backgroundImage',
	'backgroundSize',
	'backgroundPosition',
	'backgroundRepeat',
	// position
	'position',
	'zIndex',
	'top',
	'right',
	'bottom',
	'left',
	// variants
	'textStyle',
	'colorStyle',
	'buttonStyle'
)

tags.forEach(tag => {
    module.exports[tag.charAt(0).toUpperCase() + tag.slice(1)] = props => <El is={tag} {...props} />
})

module.exports['Text'] = props => <El is={'p'} {...props} />
module.exports['UL'] = props => <El is={'ul'} {...props} />
module.exports['OL'] = props => <El is={'ol'} {...props} />
module.exports['LI'] = props => <El is={'li'} {...props} />
module.exports['DL'] = props => <El is={'dl'} {...props} />
module.exports['DT'] = props => <El is={'dt'} {...props} />
module.exports['THead'] = props => <El is={'thead'} {...props} />
module.exports['TBody'] = props => <El is={'tbody'} {...props} />
module.exports['TH'] = props => <El is={'th'} {...props} />
module.exports['TR'] = props => <El is={'tr'} {...props} />
module.exports['TD'] = props => <El is={'td'} {...props} />
module.exports['TextArea'] = props => <El is={'textarea'} {...props} />
module.exports['FigCaption'] = props => <El is={'figcaption'} {...props} />