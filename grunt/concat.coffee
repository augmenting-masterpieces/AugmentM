module.exports =
  json:
    src: ['src/yaml/tmp/**/*.json']
    dest: 'src/api/posts.json'
    options:
      banner: '{"posts": ['
      footer: "]}"
      separator: ','

  vendor:
    src: [
      'src/vendor/jquery.js'
      'src/vendor/lodash.js'
      'src/vendor/firebase.js'
      'src/vendor/showdown.js'
      'src/vendor/scroll-into-view.js'
      'src/vendor/angular.js'
      'src/vendor/angular-sanitize.js'
      'src/vendor/angular-animate.js'
      'src/vendor/angular-ui-router.js'
      'src/vendor/angularfire.js'
    ]
    dest: 'dev/vendor/vendor.js'
