import { expect } from 'chai';
import RestClient from '../src/rest-client';
import sinon from 'sinon';

describe('RestClient', () => {
  let requests;
  let xhr;

  beforeEach(() => {
    xhr = sinon.useFakeXMLHttpRequest();
    requests = [];
    xhr.onCreate = (req) => {
      requests.push(req);
    };
  });

  afterEach(() => {
    xhr.restore();
  });

  it('should make request to given url', () => {
    RestClient.get('http://example.com', sinon.spy());
    expect(requests[0].url).to.equal('http://example.com');
  });

  it('should get result data from requested url', (done) => {
    const data = {foo:'bar'};
    RestClient.get('http://example.com', sinon.spy((err,results) => {
      expect(results).to.deep.equal(data);
      done();
    }));
    requests[0].respond(200, { 'Content-Type': 'text/json' }, JSON.stringify(data));
  });
});
