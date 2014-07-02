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

      css:
        expand: true
        cwd: "src"
        src: "**/*.css"
        dest: "dev/"

      js:
        expand: true
        cwd: "src"
        src: "**/*.js"
        dest: "dev/"

      json:
        expand: true
        cwd: "src"
        src: "**/*.json"
        dest: "dev/"

      fonts:
        expand: true
        flatten: true
        src: "src/styles/fonts/**/*"
        dest: "dev/styles/fonts"

      images:
        expand: true
        flatten: true
        src: "src/images/**/*"
        dest: "dev/images"

    bowercopy:
      ember:
        src: "ember/ember.js"
        dest: "dev/vendor/ember.js"

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
          "copy:html"
        ]

      css:
        files: ["src/**/*.scss"]
        tasks: [
          "sass"
          "copy:css"
        ]

      scripts:
        files: ["src/scripts/**/*.js"]
        tasks: [
          "jshint",
          "copy:js"
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
  grunt.loadNpmTasks "grunt-contrib-watch"
  grunt.loadNpmTasks "grunt-contrib-clean"
  grunt.loadNpmTasks "grunt-contrib-jshint"
  grunt.loadNpmTasks "grunt-express-server"
  grunt.loadNpmTasks "grunt-gh-pages"
