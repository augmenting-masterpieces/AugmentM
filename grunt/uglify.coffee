module.exports =
  main:
    files: [
      expand: true
      cwd: 'dev'
      src: '**/*.js'
      dest: 'dist/'
    ]
