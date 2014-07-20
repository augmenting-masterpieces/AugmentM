module.exports =
  basic:
    assets:
      port: 7358

    src: [
      "dev/vendor/vendor.js"
      "bower_components/angular-mocks/angular-mocks.js"
      "dev/scripts/app.js"
      "dev/scripts/post/Post.js"
      "dev/scripts/post/postCtrl.js"
      "dev/scripts/post/postItemCtrl.js"
      "dev/scripts/post/postItem.js"
      "dev/scripts/templates.js"
      "dev/scripts/common/filters/markdown.js"
      "dev/scripts/common/filters/underscorize.js"
      "spec/**/*.coffee"
    ]

    options:
      framework: 'jasmine2'
      parallel: 8
      launch_in_ci: ['PhantomJS']
      launch_in_dev: ['PhantomJS']
