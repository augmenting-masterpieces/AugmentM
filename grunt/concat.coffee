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
      'src/vendor/viewport-units-buggyfill.js'
      'src/vendor/angular.js'
      'src/vendor/angular-ui-router.js'
      'src/vendor/angular-sanitize.js'
      'src/vendor/angular-strap.js'
      'src/vendor/angular-strap.tpl.js'
      'src/vendor/dimensions.js'
      'src/vendor/masonry.pkgd.js'
      'src/vendor/imagesloaded.pkgd.js'
      'src/vendor/angular-images-loaded.js'
      'src/vendor/jquery.panelSnap.js'
      'src/vendor/packery.pkgd.js'
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
      'src/scripts/controllers/navCtrl.js'
      'src/scripts/controllers/displayCtrl.js'
      'src/scripts/controllers/masonryCtrl.js'
      'src/scripts/controllers/headerCtrl.js'
      'src/scripts/templates.js'
    ]
    dest: 'dev/app.js'
