import React, { Component } from 'react';
import { expect } from 'chai';
import { renderIntoDocument, findRenderedDOMComponentWithTag } from 'react-addons-test-utils';
import Artist from '../../src/components/Artist'

class Wrapper extends Component {
  render() {
    return this.props.children;
  }
}

describe('Artist', () => {
  it('should render h1 with artist name', () => {
    const component = renderIntoDocument(<Wrapper><Artist name="Lauren Hill" /></Wrapper>);
    const h1 = findRenderedDOMComponentWithTag(component, 'h1');
    expect(h1.textContent).to.equal('Lauren Hill');
  });

  it('should render img with artist image', () => {
    const component = renderIntoDocument(<Wrapper><Artist imageUrl="http://foo.com/laurenhill.jpg" /></Wrapper>);
    const img =  findRenderedDOMComponentWithTag(component, 'img');
    expect(img.src).to.equal('http://foo.com/laurenhill.jpg');
  });

  it('should render span with total followers', () => {
    const component = renderIntoDocument(<Wrapper><Artist followers="10" /></Wrapper>);
    const span = findRenderedDOMComponentWithTag(component, 'span');
    expect(span.textContent).to.equal('10');
  });
});
