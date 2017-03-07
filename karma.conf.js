module.exports = function setKarmaConfig(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha'],
    files: [
      './src/*js',
      './test/**/*.js'
    ],
    preprocessors: {
    },
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
