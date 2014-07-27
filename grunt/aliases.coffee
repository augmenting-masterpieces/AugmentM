module.exports =
  default: [
    "buildDev"
    "buildDist"
    "express"
    "watch"
  ]

  staging: [
    "buildDev"
    "aws_s3:staging"
  ]

  beta: [
    "build"
    "aws_s3:beta"
  ]

  production: [
    "build"
    "aws_s3:production"
  ]

  build: [
    "buildDev"
    "buildDist"
  ]

  ci: [
    "build"
  ]

  buildDev: [
    "clean:dev"
    "bowercopy"
    "vendor"
    "config"
    "html"
    "html2js"
    "css"
    "scripts"
    "dataModels"
    "assets"
    "autoprefixer"
    "testem:ci:dev"
  ]

  buildDist: [
    "clean:dist"
    "copy:dist"
    "uglify"
    "cssmin"
    "testem:ci:dist"
  ]
  
  css: [
    "sass"
  ]

  dataModels: [
    "yaml"
    "concat:json"
    "copy:json"
  ]

  assets: [
    "newer:imagemin"
    "copy:fonts"
  ]

  scripts: [
    "jshint"
    "concat:app"
  ]

  vendor: [
    "concat:vendor"
  ]

  html: [
    "copy:html"
  ]
  
  config: [
    "copy:config"
  ]

  test: [
    "testem:run:basic"
  ]
