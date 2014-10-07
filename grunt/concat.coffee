module.exports =
  json:
    src: ['src/yaml/tmp/**/*.json']
    dest: 'src/api/posts.json'
    options:
      banner: '{"posts": ['
      footer: "]}"
      separator: ','

  vendor:
    options:
      sourceMap: true
      sourceMapName: 'dev/vendor.js.map'
      sourceMapStyle: 'embed'

    src: [
      'src/vendor/jquery.js'
      'src/vendor/lodash.js'
      'src/vendor/firebase.js'
      'src/vendor/viewport-units-buggyfill.js'
      'src/vendor/showdown.js'
      'src/vendor/scroll-into-view.js'
      'src/vendor/angular.js'
      'src/vendor/angular-ui-router.js'
      'src/vendor/angular-sanitize.js'
      'src/vendor/angular-animate.js'
      'src/vendor/angularfire.js'
      'src/vendor/owl.carousel.js'
      'src/vendor/jquery.stellar.js'
      'src/vendor/masonry.pkgd.js'
    ]
    dest: 'dev/vendor.js'

  app:
    options:
      sourceMap: true
      sourceMapName: 'dev/app.js.map'
      sourceMapStyle: 'embed'

    src: [
      'src/scripts/app.js'
      'src/scripts/routes.js'
      'src/scripts/appCtrl.js'
      'src/scripts/controllers/caseStudyCtrl.js'
      'src/scripts/controllers/homeCtrl.js'
      'src/scripts/controllers/prototypeCtrl.js'
      'src/scripts/controllers/experimentsCtrl.js'
      'src/scripts/common/directives/scroll-into-view.js'
      'src/scripts/common/filters/markdown.js'
      'src/scripts/common/filters/underscorize.js'
      'src/scripts/templates.js'
    ]
    dest: 'dev/app.js'
