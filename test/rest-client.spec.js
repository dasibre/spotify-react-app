import { expect } from 'chai';
import sinon from 'sinon';

const RestClient = {
  get(url,callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('Get',url,true);
    xhr.onreadystatechange = () => {
      if(xhr.readyState === 4) {
        if(xhr.status === 200) {
          callback(null,JSON.parse(xhr.responseText));
        } else {
          callback(xhr.status);
        }
      }
    };
    xhr.send();
  }
};

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

  afterEach(() =>{
    xhr.restore();
  });

  it('should make request to url', () => {
    RestClient.get('http://example.com', sinon.spy());
    expect(requests[0].url).to.equal('http://example.com');
  });

  it('should make get request to url and return data', (done) => {
    const data = {foo:'bar'};
    RestClient.get('http://example.com', sinon.spy((err,results) => {
      expect(results).to.deep.equal(data);
      done();
    }));
    requests[0].respond(200, { 'Content-Type': 'text/json' }, JSON.stringify(data));
  });
});
