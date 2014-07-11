module.exports =
  posts:
    files: [
      expand: true
      cwd: "src/yaml/"
      src: ["**/*.yaml"]
      dest: "src/yaml/tmp/"
    ]
