import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import Flex from './src/Flex'
import Box from './src/Box'
import Div from './src/Div'
import Header from './src/Header'
import Main from './src/Main'
import Footer from './src/Footer'
import Section from './src/Section'
import Article from './src/Article'
import Aside from './src/Aside'
import Blockquote from './src/Blockquote'
import HGroup from './src/HGroup'
import H1 from './src/H1'
import H2 from './src/H2'
import H3 from './src/H3'
import H4 from './src/H4'
import H5 from './src/H5'
import H6 from './src/H6'
import Text from './src/Text'
import P from './src/P'
import A from './src/A'
import Span from './src/Span'
import Em from './src/Em'
import Strong from './src/Strong'
import Small from './src/Small'
import Sub from './src/Sub'
import Sup from './src/Sup'
import U from './src/U'
import Del from './src/Del'
import Mark from './src/Mark'
import Abbr from './src/Abbr'
import Q from './src/Q'
import Cite from './src/Cite'
import Dfn from './src/Dfn'
import Data from './src/Data'
import Time from './src/Time'
import Pre from './src/Pre'
import Code from './src/Code'
import Figure from './src/Figure'
import FigCaption from './src/FigCaption'
import UL from './src/UL'
import OL from './src/OL'
import LI from './src/LI'
import DL from './src/DL'
import DT from './src/DT'
import DD from './src/DD'
import Nav from './src/Nav'
import Button from './src/Button'
import LinkButton from './src/LinkButton'
import InputSubmit from './src/InputSubmit'
import Form from './src/Form'
import Fieldset from './src/Fieldset'
import Legend from './src/Legend'
import Label from './src/Label'
import Input from './src/Input'
import Select from './src/Select'
import Option from './src/Option'
import TextArea from './src/TextArea'
import Table from './src/Table'
import TBody from './src/TBody'
import THead from './src/THead'
import TH from './src/TH'
import TR from './src/TR'
import TD from './src/TD'
import TFoot from './src/TFoot'
import ColGroup from './src/ColGroup'
import Col from './src/Col'
import Caption from './src/Caption'
import Img from './src/Img'
import Image from './src/Image'
import Audio from './src/Audio'
import Video from './src/Video'

it('should render flex', ()  => {
	const tree = renderer.create(<Flex />).toJSON();
	expect(tree).toMatchSnapshot();
});

it('should render box', ()  => {
	const tree = renderer.create(<Box />).toJSON();
	expect(tree).toMatchSnapshot();
});

it('should render div', ()  => {
	const tree = renderer.create(<Div />).toJSON();
	expect(tree).toMatchSnapshot();
});

it('should render header', ()  => {
	const tree = renderer.create(<Header />).toJSON();
	expect(tree).toMatchSnapshot();
});

it('should render main', ()  => {
	const tree = renderer.create(<Main />).toJSON();
	expect(tree).toMatchSnapshot();
});

it('should render footer', ()  => {
	const tree = renderer.create(<Footer />).toJSON();
	expect(tree).toMatchSnapshot();
});

it('should render section', ()  => {
	const tree = renderer.create(<Section />).toJSON();
	expect(tree).toMatchSnapshot();
});

it('should render article', ()  => {
	const tree = renderer.create(<Article />).toJSON();
	expect(tree).toMatchSnapshot();
});

it('should render aside', ()  => {
	const tree = renderer.create(<Aside />).toJSON();
	expect(tree).toMatchSnapshot();
});

it('should render blockquote', ()  => {
	const tree = renderer.create(<Blockquote />).toJSON();
	expect(tree).toMatchSnapshot();
});

it('should render hgroup', ()  => {
	const tree = renderer.create(<HGroup />).toJSON();
	expect(tree).toMatchSnapshot();
});

it('should render h1', ()  => {
	const tree = renderer.create(<H1 />).toJSON();
	expect(tree).toMatchSnapshot();
});

it('should render h2', ()  => {
	const tree = renderer.create(<H2 />).toJSON();
	expect(tree).toMatchSnapshot();
});

it('should render h3', ()  => {
	const tree = renderer.create(<H3 />).toJSON();
	expect(tree).toMatchSnapshot();
});

it('should render h4', ()  => {
	const tree = renderer.create(<H4 />).toJSON();
	expect(tree).toMatchSnapshot();
});

it('should render h5', ()  => {
	const tree = renderer.create(<H5 />).toJSON();
	expect(tree).toMatchSnapshot();
});

it('should render h6', ()  => {
	const tree = renderer.create(<H6 />).toJSON();
	expect(tree).toMatchSnapshot();
});

it('should render text', ()  => {
	const tree = renderer.create(<Text />).toJSON();
	expect(tree).toMatchSnapshot();
});

it('should render p', ()  => {
	const tree = renderer.create(<P />).toJSON();
	expect(tree).toMatchSnapshot();
});

it('should render a', ()  => {
	const tree = renderer.create(<A />).toJSON();
	expect(tree).toMatchSnapshot();
});

it('should render span', ()  => {
	const tree = renderer.create(<Span />).toJSON();
	expect(tree).toMatchSnapshot();
});

it('should render em', ()  => {
	const tree = renderer.create(<Em />).toJSON();
	expect(tree).toMatchSnapshot();
});

it('should render strong', ()  => {
	const tree = renderer.create(<Strong />).toJSON();
	expect(tree).toMatchSnapshot();
});

it('should render small', ()  => {
	const tree = renderer.create(<Small />).toJSON();
	expect(tree).toMatchSnapshot();
});

it('should render sub', ()  => {
	const tree = renderer.create(<Sub />).toJSON();
	expect(tree).toMatchSnapshot();
});

it('should render sup', ()  => {
	const tree = renderer.create(<Sup />).toJSON();
	expect(tree).toMatchSnapshot();
});

it('should render u', ()  => {
	const tree = renderer.create(<U />).toJSON();
	expect(tree).toMatchSnapshot();
});

it('should render del', ()  => {
	const tree = renderer.create(<Del />).toJSON();
	expect(tree).toMatchSnapshot();
});

it('should render mark', ()  => {
	const tree = renderer.create(<Mark />).toJSON();
	expect(tree).toMatchSnapshot();
});

it('should render abbr', ()  => {
	const tree = renderer.create(<Abbr />).toJSON();
	expect(tree).toMatchSnapshot();
});

it('should render q', ()  => {
	const tree = renderer.create(<Q />).toJSON();
	expect(tree).toMatchSnapshot();
});

it('should render cite', ()  => {
	const tree = renderer.create(<Cite />).toJSON();
	expect(tree).toMatchSnapshot();
});

it('should render dfn', ()  => {
	const tree = renderer.create(<Dfn />).toJSON();
	expect(tree).toMatchSnapshot();
});

it('should render data', ()  => {
	const tree = renderer.create(<Data />).toJSON();
	expect(tree).toMatchSnapshot();
});

it('should render time', ()  => {
	const tree = renderer.create(<Time />).toJSON();
	expect(tree).toMatchSnapshot();
});

it('should render pre', ()  => {
	const tree = renderer.create(<Pre />).toJSON();
	expect(tree).toMatchSnapshot();
});

it('should render code', ()  => {
	const tree = renderer.create(<Code />).toJSON();
	expect(tree).toMatchSnapshot();
});

it('should render figure', ()  => {
	const tree = renderer.create(<Figure />).toJSON();
	expect(tree).toMatchSnapshot();
});

it('should render figcaption', ()  => {
	const tree = renderer.create(<FigCaption />).toJSON();
	expect(tree).toMatchSnapshot();
});

it('should render ul', ()  => {
	const tree = renderer.create(<UL />).toJSON();
	expect(tree).toMatchSnapshot();
});

it('should render ol', ()  => {
	const tree = renderer.create(<OL />).toJSON();
	expect(tree).toMatchSnapshot();
});

it('should render li', ()  => {
	const tree = renderer.create(<LI />).toJSON();
	expect(tree).toMatchSnapshot();
});

it('should render dl', ()  => {
	const tree = renderer.create(<DL />).toJSON();
	expect(tree).toMatchSnapshot();
});

it('should render dt', ()  => {
	const tree = renderer.create(<DT />).toJSON();
	expect(tree).toMatchSnapshot();
});

it('should render dd', ()  => {
	const tree = renderer.create(<DD />).toJSON();
	expect(tree).toMatchSnapshot();
});

it('should render nav', ()  => {
	const tree = renderer.create(<Nav />).toJSON();
	expect(tree).toMatchSnapshot();
});

it('should render button', ()  => {
	const tree = renderer.create(<Button />).toJSON();
	expect(tree).toMatchSnapshot();
});

it('should render linkbutton', ()  => {
	const tree = renderer.create(<LinkButton />).toJSON();
	expect(tree).toMatchSnapshot();
});

it('should render inputsubmit', ()  => {
	const tree = renderer.create(<InputSubmit />).toJSON();
	expect(tree).toMatchSnapshot();
});

it('should render form', ()  => {
	const tree = renderer.create(<Form />).toJSON();
	expect(tree).toMatchSnapshot();
});

it('should render fieldset', ()  => {
	const tree = renderer.create(<Fieldset />).toJSON();
	expect(tree).toMatchSnapshot();
});

it('should render legend', ()  => {
	const tree = renderer.create(<Legend />).toJSON();
	expect(tree).toMatchSnapshot();
});

it('should render label', ()  => {
	const tree = renderer.create(<Label />).toJSON();
	expect(tree).toMatchSnapshot();
});

it('should render input', ()  => {
	const tree = renderer.create(<Input />).toJSON();
	expect(tree).toMatchSnapshot();
});

it('should render select', ()  => {
	const tree = renderer.create(<Select />).toJSON();
	expect(tree).toMatchSnapshot();
});

it('should render option', ()  => {
	const tree = renderer.create(<Option />).toJSON();
	expect(tree).toMatchSnapshot();
});

it('should render textarea', ()  => {
	const tree = renderer.create(<TextArea />).toJSON();
	expect(tree).toMatchSnapshot();
});

it('should render table', ()  => {
	const tree = renderer.create(<Table />).toJSON();
	expect(tree).toMatchSnapshot();
});

it('should render tbody', ()  => {
	const tree = renderer.create(<TBody />).toJSON();
	expect(tree).toMatchSnapshot();
});

it('should render thead', ()  => {
	const tree = renderer.create(<THead />).toJSON();
	expect(tree).toMatchSnapshot();
});

it('should render th', ()  => {
	const tree = renderer.create(<TH />).toJSON();
	expect(tree).toMatchSnapshot();
});

it('should render tr', ()  => {
	const tree = renderer.create(<TR />).toJSON();
	expect(tree).toMatchSnapshot();
});

it('should render td', ()  => {
	const tree = renderer.create(<TD />).toJSON();
	expect(tree).toMatchSnapshot();
});

it('should render tfoot', ()  => {
	const tree = renderer.create(<TFoot />).toJSON();
	expect(tree).toMatchSnapshot();
});

it('should render colgroup', ()  => {
	const tree = renderer.create(<ColGroup />).toJSON();
	expect(tree).toMatchSnapshot();
});

it('should render col', ()  => {
	const tree = renderer.create(<Col />).toJSON();
	expect(tree).toMatchSnapshot();
});

it('should render caption', ()  => {
	const tree = renderer.create(<Caption />).toJSON();
	expect(tree).toMatchSnapshot();
});

it('should render img', ()  => {
	const tree = renderer.create(<Img />).toJSON();
	expect(tree).toMatchSnapshot();
});

it('should render image', ()  => {
	const tree = renderer.create(<Image />).toJSON();
	expect(tree).toMatchSnapshot();
});

it('should render audio', ()  => {
	const tree = renderer.create(<Audio />).toJSON();
	expect(tree).toMatchSnapshot();
});

it('should render video', ()  => {
	const tree = renderer.create(<Video />).toJSON();
	expect(tree).toMatchSnapshot();
});

