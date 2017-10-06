import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './Theme';
import Demo from '../components/Demo';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {Box, Main, UL, LI, Text, P, A, LinkButton, H3, H4, Pre, Code} from '../html';

class App extends Component {
  render() {
    return (
      	<ThemeProvider theme={theme}>
      		<Box>
		      	<Header />
		      	<Main mw="1200px" mx="auto" p={4}>
		      		<H3 pb={3}>Usage</H3>
		      		<Text pb={4} w={[1,1,1/2]}><Code p={3} borderWidth="1px" borderColor="gray1" bg="gray0">npm i styed-system-html-elements</Code></Text>
		      		<Text>Create a theme with settings for colors, typography and layout.</Text>
		      		<Pre mb={4} w={[1,1,1/2]} p={3} borderWidth="1px" borderColor="gray1" bg="gray0"><Code>{`const theme = {
  colors : {'primary':'#071'},
  space : [0,4,8,16,32,64,128]
}`}</Code></Pre>
		      		<Text>Apply your theme to the base elements as you build components.</Text>
		      		<Pre mb={5} w={[1,1,1/2]} p={3} borderWidth="1px" borderColor="gray1" bg="gray0"><Code>{`// Header with 2 levels (8px) of padding, 
// blue/primary background and white text.

<Header p={2} bg="primary" color="white">My Header</Header>`}</Code></Pre>

		      		<H3 pb={3} m={0}>Live Code Example</H3>
		      		<Demo />
			    </Main>
			    <Footer />
			</Box>
     	</ThemeProvider>
    );
  }
}

export default App;
