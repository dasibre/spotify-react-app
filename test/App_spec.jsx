import React from 'react';
import { expect } from 'chai';
import { renderIntoDocument, findRenderedDOMComponentWithTag } from 'react-addons-test-utils';
import App from '../src/App';

describe('App', () => {
  it('should render h1 with "Testing es6-react"', () => {
    const txt = 'Testing es6-react';
    const component = renderIntoDocument(<App />);
    const h1 = findRenderedDOMComponentWithTag(component, 'h1');
    expect(h1.textContent).to.equal(txt);
  });
});
