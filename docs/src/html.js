import styled from 'styled-components'
import { fontSize, color, textAlign, borderColor, borderWidth, boxShadow } from 'styled-system'
import { Flex as _Flex, Box as _Box } from 'grid-styled'
import { height, maxWidth, overflow, wrapperStyles, textStyles, textStylesPseudo, buttonStyles } from './styles'

export const Flex = styled(_Flex)([], fontSize, color, maxWidth, boxShadow, borderColor, borderWidth)
export const Box = styled(_Box)([], fontSize, color, textAlign, maxWidth, height, boxShadow, borderColor, borderWidth, overflow)
export const Div = styled(_Box)([], fontSize, color, textAlign, maxWidth, height, boxShadow, borderColor, borderWidth, overflow)
export const Header = styled.header` ${wrapperStyles} `
export const Main = styled.main` ${wrapperStyles} `
export const Footer = styled.footer` ${wrapperStyles} `

export const Section = styled.section` ${wrapperStyles} `
export const Article = styled.article` ${wrapperStyles} `
export const Aside = styled.aside` ${wrapperStyles} `
export const Blockquote = styled.blockquote` margin:0; ${wrapperStyles} `
export const HGroup = styled.hgroup` margin:0; ${wrapperStyles} `
export const H1 = styled.h1` ${textStyles} `
export const H2 = styled.h2` ${textStyles} `
export const H3 = styled.h3` ${textStyles} `
export const H4 = styled.h4` ${textStyles} `
export const H5 = styled.h5` ${textStyles} `
export const H6 = styled.h6` ${textStyles} `
export const Text = styled.p` ${textStyles} `
export const P = styled.p` padding-bottom:16px; ${textStyles} `
export const A = styled.a` ${textStylesPseudo}`
export const Span = styled.span` ${textStyles} `
export const Em = styled.em` ${textStyles} `
export const Strong = styled.strong` ${textStyles} `
export const Small = styled.small` ${textStyles} `
export const Sub = styled.sub` ${textStyles} `
export const Sup = styled.sup` ${textStyles} `
export const Underline = styled.u` ${textStyles} `
export const Strike = styled.s` ${textStyles} `
export const Mark = styled.mark` ${textStyles} `
export const Abbr = styled.abbr` ${textStyles} `
export const Quote = styled.q` ${textStyles} `
export const Cite = styled.cite` ${textStyles} `
export const Definition = styled.dfn` ${textStyles} `
export const Data = styled.data` ${textStyles} `
export const Time = styled.time` ${textStyles} `
export const Pre = styled.pre` ${textStyles} white-space:pre;-webkit-hyphens:none;-ms-hyphens:none;hyphens:none;word-wrap:normal;word-break:normal;word-spacing:normal;`
export const Code = styled.code` ${textStyles} `
export const Figure = styled.figure`margin:0 ${wrapperStyles} `
export const FigCaption = styled.figcaption` ${textStyles} `
export const UL = styled.ul` ${wrapperStyles} `
export const OL = styled.ol` ${textStyles} `
export const LI = styled.li` padding-bottom:16px; ${textStyles} `
export const DL = styled.dl` ${wrapperStyles} `
export const DT = styled.dt` ${textStyles} `
export const DD = styled.dd` ${textStyles} `

export const Nav = styled.nav` ${wrapperStyles} `
export const Button = styled.button` ${buttonStyles} `
export const LinkButton = styled.a` ${buttonStyles} `
export const InputSubmit = styled.input` ${buttonStyles} `

export const Form = styled.form` ${wrapperStyles} `
export const Fieldset = styled.fieldset` ${wrapperStyles} `
export const Legend = styled.legend` ${textStyles} `
export const Label = styled.label` ${textStyles} `
export const Input = styled.input` ${wrapperStyles} `
export const Select = styled.select` ${wrapperStyles} `
export const Option = styled.option
export const TextArea = styled.textarea` ${wrapperStyles} `

export const Table = styled.table` ${wrapperStyles} `
export const TBody = styled.tbody` ${wrapperStyles} `
export const THead = styled.thead` ${wrapperStyles} `
export const TH = styled.th` ${wrapperStyles} `
export const TR = styled.tr` ${wrapperStyles} `
export const TD = styled.td` ${wrapperStyles} `
export const TFoot = styled.tfoot` ${wrapperStyles} `
export const Colgroup = styled.colgroup` ${wrapperStyles} `
export const Col = styled.col` ${wrapperStyles} `
export const Caption = styled.caption` ${wrapperStyles} `

export const Img = styled.img` ${wrapperStyles} `
export const Image = styled.img` ${wrapperStyles} `
export const Audio = styled.audio` ${wrapperStyles} `
export const Video = styled.video` ${wrapperStyles} `
