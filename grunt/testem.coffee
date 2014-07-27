module.exports =
  basic:
    assets:
      port: 7358

    src: [
      "dev/vendor.js"
      "bower_components/angular-mocks/angular-mocks.js"
      "dev/app.js"
      "spec/**/*.coffee"
    ]

    options:
      framework: 'jasmine2'
      parallel: 8
      launch_in_ci: ['PhantomJS']
      launch_in_dev: ['PhantomJS']
