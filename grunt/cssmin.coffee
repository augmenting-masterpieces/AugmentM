module.exports =
  main:
    files: [
      expand: true
      cwd: 'dev'
      src: '**/*.css'
      dest: 'dist/'
    ]
