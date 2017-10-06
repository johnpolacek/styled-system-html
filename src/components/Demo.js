import React, { Component } from 'react';
import styled from 'styled-components';
import { Flex, Box, Header, Footer, Main, Section, Article, H1, H2, H3, H4, H5, H6, P, Text, Span, Em, Strong, Underline, Strike, Small, Blockquote, A, UL, OL, LI, Nav, Button, Form, Legend, Label, Input, Select, TextArea, InputSubmit, Pre, Code, Table, THead, TBody, TH, TR, TD, Figure, FigCaption, Img } from '../html';
import theme from '../containers/Theme';
import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview
} from 'react-live'
import { ThemeProvider } from 'styled-components';

const scope = { ThemeProvider, theme, Flex, Box, Header, Footer, Main, Section, Article, H1, H2, H3, H4, H5, H6, P, Text, Span, Em, Strong, Underline, Strike, Small, Blockquote, A, UL, OL, LI, Nav, Button, Form, Legend, Label, Input, Select, TextArea, InputSubmit, Pre, Code, Table, THead, TBody, TH, TR, TD, Figure, FigCaption, Img }

const code = `
	render(
		<ThemeProvider theme={theme}>
			<Box>
				<Header bg="base" p={3}>
					<Text color="white" align="center" color="blue1">A Header</Text>
				</Header>
				<Main pb={4}>
					<Section pb={2} mb={5} 
						borderWidth="1px" borderColor="gray2" borderBottom>
						<Article>
							<H1 f={6} m={0} pt={3}>Heading 1</H1>
							<H2 f={5}>Heading 2</H2>
							<H3 f={4}>Heading 3</H3>
							<H4 f={3}>Heading 4</H4>
							<H5 f={2}>Heading 5</H5>
							<H6 f={1}>Heading 6</H6>
							<P pr={2}>
								A paragraph of text. You can 
								<Span color="red" fontStyle="italic">style text</Span> 
								by using Span or tags like <Em>Em</Em>, 
								<Strong>Strong</Strong>, <Small>Small</Small>, 
								<Underline>Underline</Underline>, 
								<Strike>Strike</Strike>, etc.
							</P>
							<P>
								<A fontWeight="bold" 
								   color="base" 
								   href="https://github.com/jxnblk/styled-system">
								   A link
								</A>
							</P>
							<Blockquote bg="gray0" color="gray8" px={4} py={3} mb={4} 
								borderWidth={1} borderColor="gray2"
								borderLeft f={4} 
								fontStyle="italic">
								Son, you have the eyes of an eagle... a dead one.
								<Text mt={0} align="right" pr={5} f={1} color="gray">– Grandpa Polacek</Text>
							</Blockquote>
							<UL>
								<LI>List Item</LI>
								<LI>List Item</LI>
								<LI>List Item</LI>
							</UL>
							<OL>
								<LI>List Item 1</LI>
								<LI>List Item 2</LI>
								<LI>List Item 3</LI>
							</OL>
							<Figure>
								<Img w={1} src="https://unsplash.it/g/640/180" alt="Placeholder Image" />
								<FigCaption f={1} fontStyle="italic" align="center" color="gray7">A placeholder image from <A href="https://unsplash.com/">Unsplash</A></FigCaption>
							</Figure>
							<Pre my={4} borderWidth="1px" borderColor="gray1" 
								bg="gray0" p={2}>
								<Code>// Some code</Code>
							</Pre>
						</Article>
						<Nav pb={4}>
							<Button bg="base" mr={1}>Button</Button>
							<Button bg="green" mr={1}>Button</Button>
							<Button bg="red" mr={1}>Button</Button>
							<Button bg="gray" mr={1}>Button</Button>
						</Nav>
					</Section>
					<Section pb={2} mb={5} 
						borderWidth="1px" borderColor="gray2" borderBottom>
						<Form pt={2} pb={5}>
							<H3 pb={3}>Stacked Form</H3>
							<Box pb={3}>
								<Box pb={1}>
									<Label for="textInput" mr={2}>Text Input Label</Label>
								</Box>
								<Input type="text" name="textInput" id="textInput" />
							</Box>
							<Box pb={3}>
								<Box pb={1}>
									<Label for="select" mr={2}>Select Label</Label>
								</Box>
								<Select value="" height="28px" name="textInput" id="textInput">
									<option value="">Please select..</option>
									<option value="option1">Option 1</option>
									<option value="option2">Option 2</option>
									<option value="option3">Option 3</option>
								</Select>
							</Box>
							<Box pb={3}>
								<Box pb={1}>
									<Label for="textArea" mr={2}>Text Area Label</Label>
								</Box>
								<TextArea w={1} height="72px" type="text" name="textArea" id="textArea" />
							</Box>
							<Box pb={3}>
								<Box pb={2}>
									<Legend mr={2}>Radio Buttons</Legend>
								</Box>
								<Box w={1}>
									<Label for="radio1" mr={3}><Input type="radio" name="radio" id="radio1" /> Radio 1</Label>
									<Label for="radio2" mr={3}><Input type="radio" name="radio" id="radio2" /> Radio 2</Label>
									<Label for="radio3" mr={3}><Input type="radio" name="radio" id="radio3" /> Radio 3</Label>
								</Box>
							</Box>
							<Box py={3}>
								<Label for="checkboxInput" mr={2}><Input type="checkbox" name="checkboxInput" id="checkboxInput" /> Checkbox Input Label</Label>
							</Box>
							<Box py={3}>
								<InputSubmit bg="base" type="submit" value="Submit" />
							</Box>
						</Form>
					</Section>
					<Section pb={2} mb={5} 
						borderWidth="1px" borderColor="gray2" borderBottom>
						<Form pt={2} pb={5}>
							<H3 pb={3}>Responsive Inline Form</H3>
							<Flex align="flex-start" wrap pb={3}>
								<Box w={[1,1/3]} py={1} textAlign={['left','right']}>
									<Label for="textInput" mr={2}>Text Input</Label>
								</Box>
								<Box w={[1,2/3]}>
									<Input type="text" name="textInput" id="textInput" />
								</Box>
							</Flex>
							<Flex align="flex-start" wrap pb={3}>
								<Box w={[1,1/3]} py={1} textAlign={['left','right']}>
									<Label for="select" mr={2}>Select</Label>
								</Box>
								<Box w={[1,2/3]}>
									<Select value="" height="28px" name="textInput" id="textInput">
										<option value="">Please select..</option>
										<option value="option1">Option 1</option>
										<option value="option2">Option 2</option>
										<option value="option3">Option 3</option>
									</Select>
								</Box>
							</Flex>
							<Flex align="flex-start" wrap pb={3}>
								<Box w={[1,1/3]} py={1} textAlign={['left','right']}>
									<Label for="textArea" mr={2}>Text Area</Label>
								</Box>
								<Box w={[1,2/3]}>
									<TextArea w={1} height="72px" type="text" name="textArea" id="textArea" />
								</Box>
							</Flex>
							<Flex align="flex-start" wrap pb={3}>
								<Box w={[1,1/3]} py={1} textAlign={['left','right']}>
									<Legend mr={2}>Radio Buttons</Legend>
								</Box>
								<Box w={[1,2/3]}>
									<Label for="radio1" mr={3}><Input type="radio" name="radio" id="radio1" /> Radio 1</Label>
									<Label for="radio2" mr={3}><Input type="radio" name="radio" id="radio2" /> Radio 2</Label>
									<Label for="radio3" mr={3}><Input type="radio" name="radio" id="radio3" /> Radio 3</Label>
								</Box>
							</Flex>
							<Flex align="flex-start" wrap pb={3}>
								<Box ml={[0,'33.33%']} w={[1]}>
									<Label for="checkboxInput" mr={2}><Input type="checkbox" name="checkboxInput" id="checkboxInput" /> Checkbox Input</Label>
								</Box>
							</Flex>
							<Flex align="flex-start" wrap py={3}>
								<Box ml={[0,'33.33%']} w={[1]}>
									<InputSubmit bg="base" type="submit" value="Submit" />
								</Box>
							</Flex>
						</Form>
					</Section>
					<Section pb={5} mb={5} 
						borderWidth="1px" borderColor="gray2" borderBottom>
						<Table borderWidth="1px" borderColor="gray1" w={1}>
						    <THead bg="gray1">
						        <TR>
						            <TH p={2} align="right">#</TH>
						            <TH p={2}>Title</TH>
						            <TH p={2}>Director</TH>
						            <TH p={2}>Year</TH>
						        </TR>
						    </THead>
						    <TBody>
						        <TR borderWidth="1px" borderColor="gray2" borderTop>
						            <TD p={2} align="right">1</TD>
						            <TD p={2}>10 Cloverfield Lane</TD>
						            <TD p={2}>Dan Trachtenberg</TD>
						            <TD p={2}>2016</TD>
						        </TR>
						        <TR borderWidth="1px" borderColor="gray2" borderTop>
						            <TD p={2} align="right">2</TD>
						            <TD p={2}>Dredd</TD>
						            <TD p={2}>Pete Travis</TD>
						            <TD p={2}>2012</TD>
						        </TR>
						        <TR borderWidth="1px" borderColor="gray2" borderTop>
						            <TD p={2} align="right">3</TD>
						            <TD p={2}>Ex Machina</TD>
						            <TD p={2}>Alex Garland</TD>
						            <TD p={2}>2015</TD>
						        </TR>
						    </TBody>
						</Table>
					</Section>
					<Section>
						<H2>Scaffolding</H2>
						<P>Use 
							<A fontWeight="bold" color="base" href="https://github.com/jxnblk/grid-styled">grid-styled</A> to create layout structure.</P>
						<Flex borderWidth="1px">
							<Box bg="base" p={4} w={1/4} color="white" align="left">
								Box
							</Box>
							<Box bg="green" p={4} w={1/4} color="white" align="center">
								Box
							</Box>
							<Box bg="red" p={4} w={1/4} color="white" align="center">
								Box
							</Box>
							<Box bg="gray" p={4} w={1/4} color="white" align="right">
								Box
							</Box>
						</Flex>
					</Section>
				</Main>
				<Footer bg="gray1" px={3} py={5}>
					<Text color="gray" align="center">A Footer</Text>
				</Footer>
			</Box>
		</ThemeProvider>
	)
`

class Demo extends Component {
	render() {
		return (
			<LiveProvider code={code} scope={scope} noInline={true}>
				<Flex wrap>
					<Box w={[1,1,1,1/2]} overflow="hidden">
						<LiveEditor />
					</Box>
					<Box w={[1,1,1,1/2]} py={2} pl={5} pr={4,4,4,2}>
						<LiveError />
						<LivePreview />
					</Box>
				</Flex>
			</LiveProvider>
		);
	}
}

export default Demo;