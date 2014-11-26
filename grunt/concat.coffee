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
      'src/vendor/bootstrap.js'
      'src/vendor/viewport-units-buggyfill.js'
      'src/vendor/angular.js'
      'src/vendor/angular-ui-router.js'
      'src/vendor/angular-sanitize.js'
      'src/vendor/masonry.pkgd.min.js'
      'src/vendor/imagesloaded.pkgd.min.js'
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
      'src/scripts/controllers/NavCtrl.js'
      'src/scripts/templates.js'
    ]
    dest: 'dev/app.js'
