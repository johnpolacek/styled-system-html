import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'
import theme from './Theme'
import Header from './components/Header';
import Footer from './components/Footer';
import Demo from './components/Demo';
import { Flex, Box } from 'grid-styled'
import { Div, Main, H3, P, Pre, Code, A } from 'styled-system-html'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ThemeProvider theme={theme}>
          <Div>
            <Header />
            <Main mx="auto" p={4} maxWidth='1200px'>
              <H3 pb={3}>Usage</H3>
              <P pb={2} width={[1,1,1/2]}><Code p={3} bg="gray0" border='1px solid' borderColor="gray1">npm i styled-system-html</Code></P>
              <Flex flexWrap="wrap" pb={[3,3,3,4]}>
                <Box width={[1,1,1,1/2]} pr={[0,0,0,4]}>
                  <P>Create a <A color="blue" href="https://www.styled-components.com/docs/advanced">theme</A> with <A color="blue" href="http://jxnblk.com/styled-system/api">settings</A> for colors, typography and spacing.</P>
                  <Pre p={3} bg="gray0" border='1px solid' borderColor="gray1"><Code>{`const theme = {
  colors : {'primary':'#071'},
  space : [0,4,8,16,32,64,128]
}`}</Code></Pre>
                </Box>
                <Box width={[1,1,1,1/2]} pl={[0,0,0,4]}>
                  <P>Apply your theme to the element components.</P>
                  <Pre mb={4} p={3} bg="gray0" border='1px solid' borderColor="gray1"><Code>{`<H2 pb={2} color="primary">Hello</H2>`}</Code></Pre>
                  <P>For more info, see <A color="blue" fontWeight="bold" href="http://jxnblk.com/styled-system/">Styled System</A> by <A color="blue" fontWeight="bold" href="http://jxnblk.com">Brent Jackson</A>.</P>
                </Box>
              </Flex>
              <H3 pb={3} m={0}>Live Code Example</H3>
              <Demo />
            </Main>
            <Footer />
          </Div>
        </ThemeProvider>
      </div>
    )
  }
}

export default App
