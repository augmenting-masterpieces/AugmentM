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
    "config"
    "html"
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
    "concat"
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

  html: [
    "copy:html"
  ]
  
  config: [
    "copy:config"
  ]

  test: [
    "testem:run:basic"
  ]
