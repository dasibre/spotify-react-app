import jsdom from 'jsdom';

const document = jsdom.jsdom('<!DOCTYPE html><html><body></body></html>');
const window = document.defaultView;
global.document = document;
global.window = window;

Object.keys(window).forEach((key) => {
  if (!(key in global)) {
    global[key] = window[key];
  }
});
