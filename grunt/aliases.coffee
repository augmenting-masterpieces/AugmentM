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
    "buildDist"
    "aws_s3:beta"
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
  ]

  buildDist: [
    "buildDev"
    "autoprefixer"
  ]
  
  ci: [
    "buildDev"
    "testem::ci"
  ]

  css: [
    "copy:css"
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
    "jshint",
    "copy:js"
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
