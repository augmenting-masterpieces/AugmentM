module.exports =
  default: [
    "buildDev"
    "express"
    "watch"
  ]

  deploy: [
    "buildDev"
    "gh-pages"
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

  css: [
    "sass"
    "autoprefixer"
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
