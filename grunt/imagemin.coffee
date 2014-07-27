module.exports =
  main:
    files: [
      expand: true
      cwd: 'src'
      src: ['**/*.{png,jpg,gif}']
      dest: 'dev/'
    ]
