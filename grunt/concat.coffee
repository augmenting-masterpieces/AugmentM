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
      'src/scripts/post/PostService.js'
      'src/scripts/post/postCtrl.js'
      'src/scripts/post/postItemCtrl.js'
      'src/scripts/post/postItem.js'
      'src/scripts/common/directives/scroll-into-view.js'
      'src/scripts/common/filters/markdown.js'
      'src/scripts/common/filters/underscorize.js'
      'src/scripts/templates.js'
    ]
    dest: 'dev/app.js'
