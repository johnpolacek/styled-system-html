import React, { Component } from 'react';
import { Flex, Box } from 'grid-styled'
import { Div, Header, Footer, Main, Section, Article, H1, H2, H3, H4, H5, H6, P, Span, Em, Strong, U, Del, Small, Blockquote, A, UL, OL, LI, Nav, Form, Legend, Label, Input, Select, TextArea, Pre, Code, Table, THead, TBody, TH, TR, TD, Figure, FigCaption, Img } from 'styled-system-html';
import theme from '../Theme';
import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview
} from 'react-live'
import { ThemeProvider } from 'styled-components';

import Button from './Button'
import InputSubmit from './InputSubmit'

const scope = { ThemeProvider, theme, Flex, Box, Div, Header, Footer, Main, Section, Article, H1, H2, H3, H4, H5, H6, P, Span, Em, Strong, U, Del, Small, Blockquote, A, UL, OL, LI, Nav, Button, Form, Legend, Label, Input, Select, TextArea, InputSubmit, Pre, Code, Table, THead, TBody, TH, TR, TD, Figure, FigCaption, Img }

const code = `
	render(
		<ThemeProvider theme={theme}>
			<Div>
				<Header bg="base" p={3}>
					<P color="white" color="blue1" textAlign="center">A Header</P>
				</Header>
				<Main pb={4}>
					<Section mb={5} borderBottom="1px solid" borderColor="gray1">
						<Article>
							<H1 fontSize={6} m={0} pt={3}>Heading 1</H1>
							<H2 fontSize={5}>Heading 2</H2>
							<H3 fontSize={4}>Heading 3</H3>
							<H4 fontSize={3}>Heading 4</H4>
							<H5 fontSize={2}>Heading 5</H5>
							<H6 fontSize={1}>Heading 6</H6>
							<P pr={2}>
								A paragraph of text. You can 
								<Span color="red" fontStyle="italic">style text</Span> 
								by using Span or tags like <Em>Em</Em>, 
								<Strong>Strong</Strong>, <Small>Small</Small>, 
								<U>Underline</U>, <Del>Del</Del>, etc.
							</P>
							<P>
								<A fontWeight="bold" color="base" href="https://github.com/jxnblk/styled-system">
								   A link
								</A>
							</P>
							<Blockquote mx={0} p={4} mb={4} bg="gray0" 
								color="gray8" fontSize={4} fontStyle="italic"
								borderLeft="8px solid" borderColor="gray2">
								<P>Son, you have the eyes of an eagle... a dead one.</P>
								<Footer display="block" width={1} pr={5} fontSize={1} color="gray7" textAlign="right">– Grandpa Polacek</Footer>
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
								<Img width={1} src="https://unsplash.it/g/640/180" alt="Placeholder Image" />
								<FigCaption fontSize={1} fontStyle="italic" color="gray7" textAlign="center">A placeholder image from <A href="https://unsplash.com/">Unsplash</A></FigCaption>
							</Figure>
							<Pre my={4} border="solid 1px gray1" bg="gray0" p={2}>
								<Code>// Some code</Code>
							</Pre>
						</Article>
						<Nav pb={5}>
							<Button bg="base" mr={1}>Button</Button>
							<Button bg="green" mr={1}>Button</Button>
							<Button bg="red" mr={1}>Button</Button>
							<Button bg="gray" mr={1}>Button</Button>
						</Nav>
					</Section>
					<Section mb={5} borderBottom="1px solid" borderColor="gray2">
						<Form pt={2} pb={5}>
							<H3 pb={3}>Stacked Form</H3>
							<Box pb={3}>
								<Box pb={1}>
									<Label htmlFor="textInput" mr={2}>Text Input</Label>
								</Box>
								<Input type="text" name="textInput" id="textInput" />
							</Box>
							<Box pb={3}>
								<Box pb={1}>
									<Label htmlFor="select" mr={2}>Select</Label>
								</Box>
								<Select value="" height="28px" name="selectInput" id="selectInput">
									<option value="">Please select..</option>
									<option value="option1">Option 1</option>
									<option value="option2">Option 2</option>
									<option value="option3">Option 3</option>
								</Select>
							</Box>
							<Box pb={3}>
								<Box pb={1}>
									<Label htmlFor="textArea" mr={2}>Text Area</Label>
								</Box>
								<TextArea width={1} height="72px" type="text" name="textArea" id="textArea" />
							</Box>
							<Box pb={3}>
								<Box pb={2}>
									<Legend mr={2}>Radio Buttons</Legend>
								</Box>
								<Box width={1}>
									<Label htmlFor="radio1" mr={3}><Input type="radio" name="radio" id="radio1" /> Radio 1</Label>
									<Label htmlFor="radio2" mr={3}><Input type="radio" name="radio" id="radio2" /> Radio 2</Label>
									<Label htmlFor="radio3" mr={3}><Input type="radio" name="radio" id="radio3" /> Radio 3</Label>
								</Box>
							</Box>
							<Box py={3}>
								<Label htmlFor="checkboxInput" mr={2}><Input type="checkbox" name="checkboxInput" id="checkboxInput" /> Checkbox Input</Label>
							</Box>
							<Box py={3}>
								<InputSubmit bg="base" type="submit" value="Submit" />
							</Box>
						</Form>
					</Section>
					<Section pb={2} mb={5} borderBottom="1px solid" borderColor="gray2">
						<Form pb={5}>
							<H3 pb={5}>Responsive Inline Form</H3>
							<Flex alignItems="flex-start" flexWrap="wrap" pb={3}>
								<Div width={[1,1/3]} py={1} textAlign={['left','right']}>
									<Label htmlFor="textInput" mr={2}>Text Input</Label>
								</Div>
								<Div width={[1,2/3]}>
									<Input type="text" name="textInput" id="textInput" />
								</Div>
							</Flex>
							<Flex flexWrap="wrap" pb={3}>
								<Div width={[1,1/3]} py={1} textAlign={['left','right']}>
									<Label htmlFor="select" mr={2}>Select</Label>
								</Div>
								<Div width={[1,2/3]}>
									<Select height="28px" name="selectInput" id="selectInput">
										<option value="">Please select..</option>
										<option value="option1">Option 1</option>
										<option value="option2">Option 2</option>
										<option value="option3">Option 3</option>
									</Select>
								</Div>
							</Flex>
							<Flex alignItems="flex-start" flexWrap="wrap" pb={3}>
								<Div width={[1,1/3]} py={1} textAlign={['left','right']}>
									<Label htmlFor="textArea" mr={2}>Text Area</Label>
								</Div>
								<Div width={[1,2/3]}>
									<TextArea width={1} height="72px" type="text" name="textArea" id="textArea" />
								</Div>
							</Flex>
							<Flex alignItems="flex-start" flexWrap="wrap" pb={3}>
								<Div width={[1,1/3]} py={1} textAlign={['left','right']}>
									<Legend mr={2}>Radio Buttons</Legend>
								</Div>
								<Div width={[1,2/3]}>
									<Label htmlFor="radio1" mr={3}><Input type="radio" name="radio" id="radio1" /> Radio 1</Label>
									<Label htmlFor="radio2" mr={3}><Input type="radio" name="radio" id="radio2" /> Radio 2</Label>
									<Label htmlFor="radio3" mr={3}><Input type="radio" name="radio" id="radio3" /> Radio 3</Label>
								</Div>
							</Flex>
							<Flex alignItems="flex-start" flexWrap="wrap" pb={3}>
								<Box ml={[0,'33.33%']} width={[1]}>
									<Label htmlFor="checkboxInput" mr={2}><Input type="checkbox" name="checkboxInput" id="checkboxInput" /> Checkbox Input</Label>
								</Box>
							</Flex>
							<Flex alignItems="flex-start" flexWrap="wrap" py={3}>
								<Box ml={[0,'33.33%']} width={[1]}>
									<InputSubmit bg="base" type="submit" value="Submit" />
								</Box>
							</Flex>
						</Form>
					</Section>
					<Section pb={5} mb={5}>
						<H3 pb={3}>Tables</H3>
						<Table border="solid 1px gray1" width={1}>
						    <THead bg="gray1">
						        <TR>
						            <TH p={2} textAlign="right">#</TH>
						            <TH p={2}>Title</TH>
						            <TH p={2}>Director</TH>
						            <TH p={2}>Year</TH>
						        </TR>
						    </THead>
						    <TBody borderBottom="1px solid" borderColor="gray2">
						        <TR borderTop="1px solid" borderColor="gray2">
						            <TD p={2} textAlign="right">1</TD>
						            <TD p={2}>10 Cloverfield Lane</TD>
						            <TD p={2}>Dan Trachtenberg</TD>
						            <TD p={2}>2016</TD>
						        </TR>
						        <TR borderTop="1px solid" borderColor="gray2">
						            <TD p={2} textAlign="right">2</TD>
						            <TD p={2}>Dredd</TD>
						            <TD p={2}>Pete Travis</TD>
						            <TD p={2}>2012</TD>
						        </TR>
						        <TR borderTop="1px solid" borderColor="gray2">
						            <TD p={2} textAlign="right">3</TD>
						            <TD p={2}>Ex Machina</TD>
						            <TD p={2}>Alex Garland</TD>
						            <TD p={2}>2015</TD>
						        </TR>
						    </TBody>
						</Table>
					</Section>
					<Section>
						<H2>Scaffolding</H2>
						<P>Use <A fontWeight="bold" color="base" href="https://github.com/jxnblk/grid-styled">grid-styled</A> to create layout structure.</P>
						<Flex borderWidth="1px">
							<Box bg="base" p={4} width={1/4} color="white" textAlign="left">Box</Box>
							<Box bg="green" p={4} width={1/4} color="white" textAlign="center">Box</Box>
							<Box bg="red" p={4} width={1/4} color="white" textAlign="center">Box</Box>
							<Box bg="gray" p={4} width={1/4} color="white" textAlign="right">Box</Box>
						</Flex>
						<Div width={1} p={5} mt={4} mb={2} position="relative" border="dashed 1px" borderColor="gray2">
							<P align="center">Relative Position</P>
							<Div px={2} py={1} position="absolute" left="0" top="0">Top Left</Div>
							<Div px={2} py={1} position="absolute" right="0" top="0">Top Right</Div>
							<Div px={2} py={1} position="absolute" left="0" bottom="0">Bottom Left</Div>
							<Div px={2} py={1} position="absolute" right="0" bottom="0">Bottom Right</Div>
						</Div>
					</Section>
				</Main>
				<Footer bg="gray1" px={3} py={5} borderRadius="4px">
					<P color="gray" textAlign="center">A Footer</P>
				</Footer>
			</Div>
		</ThemeProvider>
	)
`

class Demo extends Component {
	render() {
		return (
			<LiveProvider code={code} scope={scope} noInline={true}>
				<Flex flexWrap="wrap" width={1}>
					<Box width={[1,1,1,1/2]} fontSize={0} pr={[0,0,0,4]}>
						<Box css={{overflowX:"hidden"}}>
							<LiveEditor />
						</Box>
					</Box>
					<Box width={[1,1,1,1/2]} pl={[0,0,0,4]} pt={[5,5,5,0]}>
						<LiveError />
						<LivePreview />
					</Box>
				</Flex>
			</LiveProvider>
		);
	}
}

export default Demo;