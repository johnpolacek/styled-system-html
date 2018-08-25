import React from 'react';
import ReactDOM from 'react-dom';
import { create as render } from 'react-test-renderer'
import tags from 'html-tags'

const renderJSON = el => render(el).toJSON()

import * as elements from './src'

tags.forEach(tag => (
	it('should render '+tag, ()  => {
		const json = renderJSON(
	    	React.createElement(elements[tag.charAt(0).toUpperCase() + tag.slice(1)])
		)
		expect(json).toMatchSnapshot()
	})
))

it('should render Text', () => {
	const json = renderJSON(
			React.createElement(elements['Text'])
		)
	expect(json).toMatchSnapshot()
})

it('should render Image', () => {
	const json = renderJSON(
			React.createElement(elements['Image'])
		)
	expect(json).toMatchSnapshot()
})

it('should render UL', () => {
	const json = renderJSON(
		React.createElement(elements['UL'])
	)
	expect(json).toMatchSnapshot()
})

it('should render OL', () => {
	const json = renderJSON(
		React.createElement(elements['OL'])
	)
	expect(json).toMatchSnapshot()
})

it('should render LI', () => {
	const json = renderJSON(
		React.createElement(elements['LI'])
	)
	expect(json).toMatchSnapshot()
})

it('should render DL', () => {
	const json = renderJSON(
		React.createElement(elements['DL'])
	)
	expect(json).toMatchSnapshot()
})

it('should render DT', () => {
	const json = renderJSON(
		React.createElement(elements['DT'])
	)
	expect(json).toMatchSnapshot()
})

it('should render THead', () => {
	const json = renderJSON(
		React.createElement(elements['THead'])
	)
	expect(json).toMatchSnapshot()
})

it('should render TBody', () => {
	const json = renderJSON(
		React.createElement(elements['TBody'])
	)
	expect(json).toMatchSnapshot()
})

it('should render TH', () => {
	const json = renderJSON(
		React.createElement(elements['TH'])
	)
	expect(json).toMatchSnapshot()
})

it('should render TR', () => {
	const json = renderJSON(
		React.createElement(elements['TR'])
	)
	expect(json).toMatchSnapshot()
})

it('should render TD', () => {
	const json = renderJSON(
		React.createElement(elements['TD'])
	)
	expect(json).toMatchSnapshot()
})

it('should render TextArea', () => {
	const json = renderJSON(
		React.createElement(elements['TextArea'])
	)
	expect(json).toMatchSnapshot()
})

it('should render FigCaption', () => {
	const json = renderJSON(
		React.createElement(elements['FigCaption'])
	)
	expect(json).toMatchSnapshot()
})



