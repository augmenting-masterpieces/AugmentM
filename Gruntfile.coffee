module.exports = (grunt) ->
  grunt.initConfig
    clean:
      dev:
        src: ["dev/"]

    copy:
      config:
        expand: true
        cwd: "src"
        src: "CNAME"
        dest: "dev/"

      html:
        expand: true
        cwd: "src"
        src: "**/*.html"
        dest: "dev/"

      js:
        expand: true
        cwd: "src"
        src: "**/*.js"
        dest: "dev/"

      json:
        expand: true
        flatten: true
        cwd: "src"
        src: "api/**/*.json"
        dest: "dev/api"

      fonts:
        expand: true
        flatten: true
        src: "src/styles/fonts/**/*"
        dest: "dev/fonts"

      images:
        expand: true
        flatten: true
        src: "src/images/**/*"
        dest: "dev/images"

    yaml:
      posts:
        files: [
          expand: true
          cwd: "src/yaml/"
          src: ["**/*.yaml"]
          dest: "src/yaml/tmp/"
        ]

    autoprefixer:
      dev:
        expand: true
        flatten: true
        src: 'src/**/*.css'
        dest: 'dev/styles'

    concat:
      json:
        src: ['src/yaml/tmp/**/*.json']
        dest: 'src/api/posts.json'
        options:
          banner: '{"posts": ['
          footer: "]}"
          separator: ','

    bowercopy:
      ember:
        src: "ember/ember.js"
        dest: "dev/vendor/ember.js"

      lodash:
        src: "lodash/dist/lodash.js"
        dest: "dev/vendor/lodash.js"

      jquery:
        src: "jquery/dist/jquery.js"
        dest: "dev/vendor/jquery.js"

      handlebars:
        src: "handlebars/handlebars.js"
        dest: "dev/vendor/handlebars.js"

      marked:
        src: "marked/lib/marked.js"
        dest: "dev/vendor/marked.js"

    express:
      dev:
        options:
          script: "server.js"

    jshint:
      all: ["src/scripts/**/*.js"]

    sass:
      main:
        src: 'src/styles/main.scss'
        dest: 'src/styles/main.css'

      components:
        src: 'src/styles/components/components.scss'
        dest: 'src/styles/components.css'

    watch:
      html:
        files: ["src/**/*.html"]
        tasks: [
          "newer:copy:html"
        ]

      css:
        files: ["src/**/*.scss"]
        tasks: [
          "newer:sass"
        ]

      scripts:
        files: ["src/scripts/**/*.js"]
        tasks: [
          "newer:jshint",
          "newer:copy:js"
        ]

      assets:
        files: [
          "src/images/**/*"
          "src/fonts/**/*"
        ]
        tasks: [
          "copy:images"
          "copy:fonts"
        ]
      
      yaml:
        files: ["src/**/*.yaml"]
        tasks: ["newer:yaml", "concat", "copy:json"]

      options:
        livereload: true

    'gh-pages':
      production:
        options:
          base: 'dev',
          branch: 'master',
          repo: 'git@github.com:coding-the-humanities/coding-the-humanities.github.io.git'
        src: ['**']

  grunt.registerTask "buildDev", [
    "clean:dev"
    "bowercopy"
    "yaml"
    "concat"
    "autoprefixer"
    "sass"
    "jshint"
    "copy"
  ]
  grunt.registerTask "default", [
    "buildDev"
    "express"
    "watch"
  ]
  grunt.registerTask "deploy", [
    "buildDev"
    "gh-pages"
  ]

  grunt.loadNpmTasks "grunt-contrib-copy"
  grunt.loadNpmTasks "grunt-bowercopy"
  grunt.loadNpmTasks "grunt-sass"
  grunt.loadNpmTasks "grunt-newer"
  grunt.loadNpmTasks "grunt-yaml"
  grunt.loadNpmTasks "grunt-autoprefixer"
  grunt.loadNpmTasks "grunt-contrib-watch"
  grunt.loadNpmTasks "grunt-contrib-concat"
  grunt.loadNpmTasks "grunt-contrib-clean"
  grunt.loadNpmTasks "grunt-contrib-jshint"
  grunt.loadNpmTasks "grunt-express-server"
  grunt.loadNpmTasks "grunt-gh-pages"
