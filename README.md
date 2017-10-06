# Styled System HTML

HTML elements extended as styled components via styled system, ready for theming. Built with/for:

- [Styled Components](http://styled-components.com)
- [Styled System](http://jxnblk.com/styled-system/) by [Brent Jackson](http://jxnblk.com)
- [Grid Styled](http://jxnblk.com/grid-styled/) by [Brent Jackson](http://jxnblk.com)


##Usage

`npm i styled-system-html`

Create a theme with settings for colors, typography and layout.

```
const theme = {
  colors : {'primary':'#071'},
  space : [0,4,8,16,32,64,128]
}
```

Apply your theme to the base elements as you build components.

```
// Header with 2 levels (8px) of padding, 
// blue/primary background and white text.

<Header p={2} bg="primary" color="white">
	My Header
</Header>
```

For more info, see:

- [Styled System HTML](https://github.com/johnpolacek/styled-system-html)
- [Styled System](http://jxnblk.com/styled-system/) by [Brent Jackson](http://jxnblk.com)

Created by John Polacek

- [@johnpolacek](https://twitter.com/johnpolacek)
- [johnpolacek.com](http://johnpolacek.com)