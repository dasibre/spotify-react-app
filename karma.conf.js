const entry1 = 'test/**/*_spec.jsx';
const entry2 = 'test/**/*_spec.js';
const webpackConfig = require('./webpack.config');

module.exports = function setKarmaConfig(config) {
  config.set({
    basePath: './',
    frameworks: ['mocha', 'chai'],
    files: [
			{pattern: entry1, watched: false},
			{pattern: entry2, watched: false}
    ],
    exclude: ['/test/helpers/*'],
    preprocessors: {
      [entry1]: ['webpack'],
      [entry2]: ['webpack']
    },
    webpack: webpackConfig,
    webpackMiddleware: {noInfo: true},
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['Chrome', 'Safari'],
    singleRun: true,
    concurrency: Infinity
  })
}
