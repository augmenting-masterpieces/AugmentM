module.exports =
  html:
    files: ["src/**/*.html"]
    tasks: [
      "newer:copy:html"
    ]

  css:
    files: ["src/**/*.scss"]
    tasks: [
      "newer:css"
    ]

  scripts:
    files: ["src/scripts/**/*.js", "spec/**/*.coffee"]
    tasks: [
      "scripts"
    ]

  assets:
    files: [
      "src/images/**/*"
      "src/fonts/**/*"
    ]
    tasks: [
      "newer:assets"
    ]
  
  yaml:
    files: ["src/**/*.yaml"]
    tasks: ["newer:dataModels"]

  options:
    livereload: true
