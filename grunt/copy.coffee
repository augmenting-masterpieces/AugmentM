module.exports =
  config:
    expand: true
    cwd: "src"
    src: "CNAME"
    dest: "dev/"

  css:
    expand: true
    cwd: "dev"
    src: "styles/**/*.{css,scss}"
    dest: "dev/"

  html:
    expand: true
    cwd: "src"
    src: ["**/*.html", "!templates/**/*"]
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

  images:
    expand: true
    flatten: false
    cwd: "src"
    src: "images/**/*.*"
    dest: "dev/"

  fonts:
    expand: true
    flatten: true
    src: "**/*.{eot,woff,woff2,ttf}"
    dest: "dev/fonts"

  video:
    expand: true
    cwd: "src"
    src: "video/**/*.*"
    dest: "dev/"  

  dist:
    expand: true
    cwd: "dev"
    src: ["index.html", "CNAME", "images/**/*", "fonts/**/*", "api/**/*", "**/*.js"]
    dest: "dist"

