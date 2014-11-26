module.exports = (grunt) ->
  aws = { }

  try
    aws = grunt.file.readJSON('./config/aws.json')
  catch error
    aws = {}
    console.log(aws)

  options:
    accessKeyId: aws.AWSAccessKeyId
    secretAccessKey: aws.AWSSecretKey
    region: 'eu-west-1'
    uploadConcurrency: 5
    downloadConcurrency: 5

  staging:
    options:
      bucket: 'augmas-staging'
    files: [
      expand: true
      cwd: 'dev'
      src: '**/*'
      dest: ''
    ]

  beta:
    options:
      bucket: ''
    files: [
      expand: true
      cwd: 'dist'
      src: '**/*'
      dest: ''
    ]

  production:
    options:
      bucket: ' '
    files: [
      expand: true
      cwd: 'dist'
      src: '**/*'
      dest: ''
    ]

