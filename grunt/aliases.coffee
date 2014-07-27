module.exports =
  default: [
    "buildDev"
    "express"
    "watch"
  ]

  staging: [
    "buildDev"
    "aws_s3:dev"
  ]

  beta: [
    "buildDev"
    "buildDist"

    # "aws_s3:beta"

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
  ]

  buildDist: [
    "copy:dist"
    "uglify"
    "cssmin"
  ]
  
  ci: [
    "buildDev"
    "testem::ci"
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
    "copy:images"
    "copy:fonts"
  ]

  scripts: [
    "jshint"
    "concat:app"
  ]

  vendor: [
    "newer:concat:vendor"
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
