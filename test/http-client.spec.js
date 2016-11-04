import { expect } from 'chai';

const get = () => {
};

describe('GET', () => {
  it('should make get request to url', () => {
    const url = 'http://example.com';
    const response = get(url);
    expect(response.status).to.be.ok;
  });
});
