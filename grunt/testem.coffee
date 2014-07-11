module.exports =
  basic:
    assets:
      port: 7358

    src: [
      "bower_components/angular/angular.js"
      "bower_components/angular-mocks/angular-mocks.js"
      "dev/scripts/app.js"
      "dev/scripts/post/postCtrl.js"
      "spec/**/*.coffee"
    ]

    options:
      parallel: 8
      launch_in_ci: ['PhantomJS']
      launch_in_dev: ['PhantomJS']
