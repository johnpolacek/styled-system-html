# Styled System HTML
[![Build Status](https://travis-ci.org/johnpolacek/styled-system-html.svg?branch=master)](https://travis-ci.org/johnpolacek/system-html)

HTML elements extended as components, ready for theming via styled system. Built with/for [Styled Components](http://styled-components.com) & [Styled System](http://jxnblk.com/styled-system/)

## Usage

```
$ npm i styled-system-html
```

Create a [theme](https://www.styled-components.com/docs/advanced) with [settings](http://jxnblk.com/styled-system/api) for colors, typography and spacing.

```
const theme = {
  colors : {'primary':'#071'},
  space : [0,4,8,16,32,64,128]
}
```

Apply your theme to the element components.

```
// Header with 2 levels (8px) of padding, 
// blue/primary background and white text.

<Header p={2} bg="primary" color="white">
  My Header
</Header>
```

Try it out at [johnpolacek.github.io/styled-system-html](https://johnpolacek.github.io/styled-system-html/)

For more info, see [Styled System](http://jxnblk.com/styled-system/) by [Brent Jackson](http://jxnblk.com).

--

Created by John Polacek

- [@johnpolacek](https://twitter.com/johnpolacek)
- [johnpolacek.com](http://johnpolacek.com)
