module.exports =
  json:
    src: ['src/yaml/tmp/**/*.json']
    dest: 'src/api/posts.json'
    options:
      banner: '{"posts": ['
      footer: "]}"
      separator: ','
