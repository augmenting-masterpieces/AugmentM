module.exports =
  basic:
    assets:
      port: 7358

    src: [
      "bower_components/angular/angular.js"
      "bower_components/angular-ui-router/release/angular-ui-router.js"
      "bower_components/firebase/firebase.js"
      "bower_components/angularfire/angularfire.js"
      "bower_components/angular-mocks/angular-mocks.js"
      "dev/scripts/app.js"
      "dev/scripts/post/postCtrl.js"
      "dev/scripts/post/postDataService.js"
      "spec/**/*.coffee"
    ]

    options:
      parallel: 8
      launch_in_ci: ['PhantomJS']
      launch_in_dev: ['PhantomJS']
