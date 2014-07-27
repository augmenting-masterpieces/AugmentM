module.exports = (grunt) ->
  options:
    accessKeyId: grunt.file.readJSON('./config/aws.json').AWSAccessKeyId
    secretAccessKey: grunt.file.readJSON('./config/aws.json').AWSSecretKey
    region: 'us-east-1'
    uploadConcurrency: 5
    downloadConcurrency: 5

  staging:
    options:
      bucket: 'cth-dev.cc'
    files: [
      expand: true
      cwd: 'dev'
      src: '**/*'
      dest: ''
    ]

  beta:
    options:
      bucket: 'beta.codingthehumanities.com'
    files: [
      expand: true
      cwd: 'dist'
      src: '**/*'
      dest: ''
    ]

  production:
    options:
      bucket: 'codingthehumanities.com'
    files: [
      expand: true
      cwd: 'dist'
      src: '**/*'
      dest: ''
    ]

