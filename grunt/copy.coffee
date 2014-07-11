module.exports =
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
